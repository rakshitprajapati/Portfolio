"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const SpatialBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.0022);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 12, 80);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Quantum Starfield / Cyber Lattice (1,600 Particles in 3D Depth)
    const particleCount = 1600;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorPurple = new THREE.Color(0x8b5cf6);
    const colorEmerald = new THREE.Color(0x10b981);
    const tempColor = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 260; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // Y
      positions[i * 3 + 2] = Math.random() * 360 - 270; // Z: -270 to +90

      const ratio = Math.random();
      if (ratio < 0.45) {
        tempColor.lerpColors(colorCyan, colorPurple, ratio * 2.2);
      } else {
        tempColor.lerpColors(colorPurple, colorEmerald, (ratio - 0.45) * 1.8);
      }

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Custom glowing circle canvas texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.35, "rgba(255,255,255,0.75)");
      gradient.addColorStop(0.8, "rgba(255,255,255,0.15)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 3. Dual Cyber Highways (Ground and Ceiling Wireframes)
    // Floor Grid (Cyan)
    const floorGrid = new THREE.GridHelper(340, 48, 0x06b6d4, 0x1e293b);
    floorGrid.position.y = -38;
    (floorGrid.material as THREE.Material).transparent = true;
    (floorGrid.material as THREE.Material).opacity = 0.22;
    scene.add(floorGrid);

    // Ceiling Data Grid (Violet)
    const ceilingGrid = new THREE.GridHelper(340, 48, 0x8b5cf6, 0x1e1b4b);
    ceilingGrid.position.y = 45;
    (ceilingGrid.material as THREE.Material).transparent = true;
    (ceilingGrid.material as THREE.Material).opacity = 0.15;
    scene.add(ceilingGrid);

    // 4. Cyber Data Conduit Gate Rings (Dive Through Hexagonal Portals)
    const ringCount = 6;
    const rings: THREE.LineLoop[] = [];
    const ringZPositions = [-250, -190, -130, -70, -10, 50];

    for (let r = 0; r < ringCount; r++) {
      const ringGeo = new THREE.BufferGeometry();
      const segments = 6;
      const radius = 32;
      const ringPoints: THREE.Vector3[] = [];

      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        ringPoints.push(
          new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
        );
      }
      ringGeo.setFromPoints(ringPoints);

      const ringColor = r % 2 === 0 ? 0x06b6d4 : 0x8b5cf6;
      const ringMat = new THREE.LineBasicMaterial({
        color: ringColor,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
      });

      const ringMesh = new THREE.LineLoop(ringGeo, ringMat);
      ringMesh.position.set(0, 4, ringZPositions[r]);
      scene.add(ringMesh);
      rings.push(ringMesh);
    }

    // 5. Scroll Dynamics & Velocity Tracking
    let targetScrollY = 0;
    let currentScrollY = 0;
    let scrollVelocity = 0;
    let scrollDirection = 1;
    let lastScrollY = 0;
    let lastScrollTime = performance.now();

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 6. Dynamic Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // 7. Animation Loop with Continuous 3D Cyber Dive
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let gridOffset = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const now = performance.now();
      const dt = Math.max(1, now - lastScrollTime);

      // Compute smooth scroll and velocity
      const prevScroll = currentScrollY;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      const deltaY = targetScrollY - lastScrollY;
      scrollDirection = deltaY >= 0 ? 1 : -1;

      const rawVel = Math.abs(currentScrollY - prevScroll);
      scrollVelocity += (rawVel * 2.2 - scrollVelocity) * 0.12;

      lastScrollY = targetScrollY;
      lastScrollTime = now;

      // Mouse smoothing
      targetX += (mouseX * 14 - targetX) * 0.04;
      targetY += (-mouseY * 10 - targetY) * 0.04;

      // --- DIVE EFFECT 1: Infinite Z-Warp Starfield Particles ---
      const posArray = particleGeometry.attributes.position.array as Float32Array;
      const baseSpeed = 0.22;
      const diveSpeed = scrollVelocity * 1.5 * scrollDirection;
      const zStep = baseSpeed + diveSpeed;

      for (let i = 0; i < particleCount; i++) {
        let pZ = posArray[i * 3 + 2] + zStep;

        // Recycle particle when it passes camera (z=80) or goes too deep
        if (pZ > 85) {
          pZ = -270;
          posArray[i * 3] = (Math.random() - 0.5) * 260;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
        } else if (pZ < -275) {
          pZ = 85;
          posArray[i * 3] = (Math.random() - 0.5) * 260;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
        }

        posArray[i * 3 + 2] = pZ;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Dynamic Particle Flare on High-Speed Warp
      const targetSize = 2.2 + Math.min(scrollVelocity * 0.14, 3.2);
      particleMaterial.size += (targetSize - particleMaterial.size) * 0.1;
      particleMaterial.opacity = 0.65 + Math.min(scrollVelocity * 0.02, 0.3);

      // Particle subtle ambient rotation
      particleSystem.rotation.z = elapsedTime * 0.015;

      // --- DIVE EFFECT 2: Cyber Highways (Moving Floor and Ceiling) ---
      gridOffset += (0.06 + scrollVelocity * 0.3 * scrollDirection);
      floorGrid.position.z = (gridOffset % 7) - 35;
      ceilingGrid.position.z = (gridOffset % 7) - 35;

      // Pitch tilt of grids on dive
      const divePitch = Math.min(scrollVelocity * 0.003, 0.05) * scrollDirection;
      floorGrid.rotation.x = divePitch;
      ceilingGrid.rotation.x = -divePitch;

      // --- DIVE EFFECT 3: Hexagonal Conduit Gate Rings ---
      const ringStep = (0.2 + scrollVelocity * 0.9 * scrollDirection);
      rings.forEach((ring, idx) => {
        ring.position.z += ringStep;
        ring.rotation.z += 0.003 * (idx % 2 === 0 ? 1 : -1);

        // Recycle ring through the tunnel
        if (ring.position.z > 88) {
          ring.position.z = -260;
        } else if (ring.position.z < -265) {
          ring.position.z = 85;
        }

        // Pulse ring opacity when near camera
        const distFromCam = Math.abs(ring.position.z - 80);
        const ringAlpha = Math.max(0.08, Math.min(0.45, (120 - distFromCam) / 120));
        (ring.material as THREE.LineBasicMaterial).opacity = ringAlpha;
      });

      // --- DIVE EFFECT 4: Camera Dynamic FOV & Dive Momentum ---
      const targetFov = 60 + Math.min(scrollVelocity * 0.3, 7.5);
      if (Math.abs(camera.fov - targetFov) > 0.1) {
        camera.fov += (targetFov - camera.fov) * 0.1;
        camera.updateProjectionMatrix();
      }

      camera.position.x = targetX * 0.75;
      camera.position.y = 12 + targetY * 0.45 - divePitch * 30;
      camera.lookAt(0, 4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Spatial VisionOS Chromatic Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-violet-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[38rem] h-[38rem] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Subtle Scanline & Depth Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};
