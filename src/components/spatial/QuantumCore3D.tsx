"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { soundFX } from "../cyber/SoundController";
import { Shield, Lock, Radio, RefreshCw } from "lucide-react";

const DEFENSE_MODES = [
  { name: "CTF & NETWORK FORENSICS", cipher: "PCAP / Packets", color: 0x06b6d4, hex: "#06b6d4" },
  { name: "WEB APP SECURITY", cipher: "OWASP / Assessment", color: 0x8b5cf6, hex: "#8b5cf6" },
  { name: "API & EHR ARCHITECTURE", cipher: "ICD-11 / Geo-fence", color: 0x10b981, hex: "#10b981" },
];

export const QuantumCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentModeIdx, setCurrentModeIdx] = useState(0);
  const [rotationCoords, setRotationCoords] = useState({ x: 0, y: 0 });
  const activeMode = DEFENSE_MODES[currentModeIdx];

  const modeRef = useRef(currentModeIdx);
  modeRef.current = currentModeIdx;

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Geometry: Icosahedron Wireframe + Inner Crystal
    const innerGeom = new THREE.IcosahedronGeometry(1.3, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: activeMode.color,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerWireMat);
    coreGroup.add(innerMesh);

    // Inner glowing solid core
    const solidGeom = new THREE.OctahedronGeometry(0.7, 0);
    const solidMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false,
      transparent: true,
      opacity: 0.15,
    });
    const solidMesh = new THREE.Mesh(solidGeom, solidMat);
    coreGroup.add(solidMesh);

    // 2. Gyroscopic Cryptographic Rings
    const createRing = (radius: number, tube: number, color: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.55,
      });
      return new THREE.Mesh(ringGeom, ringMat);
    };

    const ring1 = createRing(1.85, 0.015, 0x06b6d4);
    const ring2 = createRing(2.2, 0.012, 0x8b5cf6);
    const ring3 = createRing(2.55, 0.01, 0x10b981);

    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;

    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // 3. Orbiting Data Nodes
    const nodeCount = 18;
    const nodeGeom = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.0 + (i % 3) * 0.35;
      node.position.set(
        Math.cos(angle) * radius,
        (Math.sin(i * 1.5) * 0.8),
        Math.sin(angle) * radius
      );
      coreGroup.add(node);
      nodes.push(node);
    }

    // Interactive Drag / Tilt
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Dynamic color update from activeMode
      const activeColor = DEFENSE_MODES[modeRef.current].color;
      innerWireMat.color.setHex(activeColor);

      // Idle Rotation + Dampened User Rotation
      targetRotationY += 0.004;
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      // Gyroscopic Ring Rotations
      ring1.rotation.x += 0.009;
      ring1.rotation.y += 0.006;
      ring2.rotation.y -= 0.011;
      ring2.rotation.z += 0.007;
      ring3.rotation.z += 0.008;
      ring3.rotation.x -= 0.005;

      // Inner Pulse
      const scale = 1 + Math.sin(elapsed * 2.5) * 0.06;
      innerMesh.scale.set(scale, scale, scale);
      solidMesh.rotation.y = -elapsed * 0.8;
      solidMesh.rotation.x = elapsed * 0.5;

      // Orbiting nodes pulse
      nodes.forEach((n, idx) => {
        const nodScale = 0.8 + Math.sin(elapsed * 3 + idx) * 0.4;
        n.scale.set(nodScale, nodScale, nodScale);
      });

      setRotationCoords({
        x: Math.round(coreGroup.rotation.x * 57.29) % 360,
        y: Math.round(coreGroup.rotation.y * 57.29) % 360,
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      innerGeom.dispose();
      innerWireMat.dispose();
      solidGeom.dispose();
      solidMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const cycleMode = () => {
    soundFX.playClick();
    setCurrentModeIdx((prev) => (prev + 1) % DEFENSE_MODES.length);
  };

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center select-none group">
      {/* Outer Spatial Frosted Ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm pointer-events-none transition-all duration-700 group-hover:border-cyan-500/30" />

      {/* Pulsing Luminous Backlight */}
      <div
        className="absolute inset-4 rounded-full blur-2xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeMode.hex }}
      />

      {/* WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Click and drag to rotate the Quantum Defense Core"
        onMouseEnter={() => soundFX.playHover()}
      />

      {/* Interactive Drag Hint Badge */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
        <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
        <span>INTERACTIVE 3D • DRAG TO ROTATE</span>
      </div>

      {/* Mode Switcher Action Button */}
      <div className="absolute bottom-2 inset-x-2 z-20 flex justify-between items-center px-4 py-2 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/15 shadow-2xl">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: activeMode.hex }}
          />
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              FOCUS AREA
            </div>
            <div
              className="text-xs font-mono font-bold transition-colors duration-300"
              style={{ color: activeMode.hex }}
            >
              {activeMode.name}
            </div>
          </div>
        </div>

        <button
          onClick={cycleMode}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-500/40 text-[11px] font-mono text-slate-300 hover:text-cyan-400 transition-all active:scale-95 cursor-pointer"
          title="Cycle Defense Mode"
        >
          <RefreshCw className="w-3 h-3" />
          <span>CYCLE</span>
        </button>
      </div>
    </div>
  );
};
