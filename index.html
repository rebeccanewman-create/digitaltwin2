<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Twin Workbench</title>
    <style>
        body {
            margin: 0; padding: 0; overflow: hidden;
            background-color: #0b0c10; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #canvas-container { width: 100vw; height: 100vh; position: absolute; z-index: 1; }
        
        /* 🎛️ Left Control Panel */
        #left-panel {
            position: absolute; top: 20px; left: 20px; width: 340px;
            background: rgba(20, 24, 33, 0.85); backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 173, 181, 0.2); border-radius: 8px;
            padding: 20px; color: #fff; z-index: 10; box-shadow: 0 4px 30px rgba(0,0,0,0.7);
        }
        
        /* 🤖 Right AI Panel */
        #right-panel {
            position: absolute; top: 20px; right: 20px; width: 340px; height: calc(100vh - 80px);
            background: rgba(20, 24, 33, 0.85); backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 173, 181, 0.2); border-radius: 8px;
            padding: 20px; color: #fff; z-index: 10; display: flex; flex-direction: column;
            box-shadow: 0 4px 30px rgba(0,0,0,0.7);
        }

        h2 { margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #00adb5; border-left: 3px solid #00adb5; padding-left: 8px; }
        .control-group { margin-bottom: 20px; }
        label { display: block; font-size: 12px; color: #aaaaaa; margin-bottom: 8px; text-transform: uppercase; }
        
        /* Sliders */
        .slider {
            width: 100%; -webkit-appearance: none; background: #252c3a; height: 6px; border-radius: 3px; outline: none;
        }
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #00adb5; cursor: pointer; box-shadow: 0 0 8px #00adb5;
        }

        /* Metrics Grid */
        .metrics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px; }
        .card { background: rgba(37, 44, 58, 0.5); padding: 10px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); }
        .card-label { font-size: 11px; color: #888; text-transform: uppercase; }
        .card-value { font-size: 16px; font-weight: bold; font-family: monospace; color: #fff; margin-top: 4px; }

        /* Chat Layout */
        #chat-history { flex: 1; overflow-y: auto; margin-bottom: 15px; display: flex; flex-direction: column; gap: 10px; padding-right: 5px; font-size: 13px; }
        .msg { padding: 8px 12px; border-radius: 6px; line-height: 1.4; max-width: 85%; }
        .ai-msg { background: #1f2430; color: #e0e0e0; align-self: flex-start; border-left: 3px solid #00adb5; }
        .user-msg { background: #00adb5; color: white; align-self: flex-end; }
        
        #chat-input-area { display: flex; gap: 8px; }
        #chat-input { flex: 1; background: #1f2430; border: 1px solid #3a4454; color: white; padding: 10px; border-radius: 4px; font-size: 13px; outline: none; }
        #chat-input:focus { border-color: #00adb5; }
        #send-btn { background: #00adb5; color: white; border: none; padding: 0 15px; border-radius: 4px; font-weight: bold; cursor: pointer; }
    </style>
    <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
    <script type="importmap">
      {
        "imports": {
          "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
          "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
      }
    </script>
</head>
<body>

    <div id="canvas-container"></div>

    <div id="left-panel">
        <h2>Twin Workbench Controls</h2>
        
        <div class="control-group">
            <label for="height-slider">Layer Build Progress: <span id="height-val">100</span>%</label>
            <input type="range" id="height-slider" class="slider" min="5" max="100" value="100">
        </div>

        <div class="control-group">
            <label for="warp-slider">Thermal Warping Distortion: <span id="warp-val">0</span>μm</label>
            <input type="range" id="warp-slider" class="slider" min="0" max="50" value="0">
        </div>

        <hr style="border: 0; height: 1px; background: rgba(255,255,255,0.1); margin: 20px 0;">

        <h2>Process Telemetry Data</h2>
        <div class="metrics-grid">
            <div class="card">
                <div class="card-label">Extruder Temp</div>
                <div class="card-value" id="live-temp">215.2°C</div>
            </div>
            <div class="card">
                <div class="card-label">Build Plate</div>
                <div class="card-value">110.0°C</div>
            </div>
            <div class="card">
                <div class="card-label">Current Layer</div>
                <div class="card-value" id="live-layer">0.200 mm</div>
            </div>
            <div class="card">
                <div class="card-label">System Status</div>
                <div class="card-value" id="live-status" style="color: #39ec5c; font-size: 13px;">OPERATIONAL</div>
            </div>
        </div>
    </div>

    <div id="right-panel">
        <h2>AI Twin Assistant</h2>
        <div id="chat-history">
            <div class="msg ai-msg">Digital twin environment active. Use the sliders to run virtual build tests or adjust parameter bounds. Ask me anything about the model geometry.</div>
        </div>
        <div id="chat-input-area">
            <input type="text" id="chat-input" placeholder="Ask about system warping or tolerances..." onkeypress="handleKeyPress(event)">
            <button id="send-btn" onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        let scene, camera, renderer, controls, mesh;
        let originalPositions = [];

        function init() {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x11141a);

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(6, 6, 8);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;

            // Lights
            const ambient = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambient);
            const dir1 = new THREE.DirectionalLight(0x00adb5, 0.8);
            dir1.position.set(5, 10, 5);
            scene.add(dir1);
            const dir2 = new THREE.DirectionalLight(0xffffff, 0.4);
            dir2.position.set(-5, 3, -5);
            scene.add(dir2);

            // Procedural CAD Geometry Matrix (Simulating standard SS-J3 component look)
            const geometry = new THREE.CylinderGeometry(1.5, 2, 3, 32, 32);
            const material = new THREE.MeshStandardMaterial({
                color: 0x90949c, roughness: 0.3, metalness: 0.8, wireframe: false
            });
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Back up vertex positioning array coordinates for live distortion transformations
            const positionAttribute = geometry.attributes.position;
            for (let i = 0; i < positionAttribute.count; i++) {
                originalPositions.push({
                    x: positionAttribute.getX(i),
                    y: positionAttribute.getY(i),
                    z: positionAttribute.getZ(i)
                });
            }

            window.addEventListener('resize', onWindowResize);
            animate();
        }

        // Live Manipulation Function linked directly to HTML input inputs
        window.updateGeometry = function(progress, warpAmount) {
            const positionAttribute = mesh.geometry.attributes.position;
            
            // Calculate truncation point for layer build simulation height slicing
            const heightLimit = ((progress / 100) * 3) - 1.5; // Maps 0-100% back to geometry bounds

            for (let i = 0; i < positionAttribute.count; i++) {
                let orig = originalPositions[i];
                
                // 1. Evaluate Layer Progression Cutoff
                if (orig.y > heightLimit) {
                    positionAttribute.setXYZ(i, 0, heightLimit, 0); // Collapses remaining layers down
                } else {
                    // 2. Compute dynamic micro thermal warp displacement values using sine noise calculation
                    let distortion = Math.sin(orig.y * 5) * (warpAmount / 200);
                    positionAttribute.setXYZ(
                        i, 
                        orig.x + distortion * (orig.x * 0.5), 
                        orig.y, 
                        orig.z + distortion * (orig.z * 0.5)
                    );
                }
            }
            positionAttribute.needsUpdate = true;
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        init();
    </script>

    <script>
        const heightSlider = document.getElementById('height-slider');
        const warpSlider = document.getElementById('warp-slider');
        const heightVal = document.getElementById('height-val');
        const warpVal = document.getElementById('warp-val');

        function syncSliders() {
            heightVal.innerText = heightSlider.value;
            warpVal.innerText = warpSlider.value;
            
            // Update 3D canvas object variables
            if (window.updateGeometry) {
                window.updateGeometry(parseFloat(heightSlider.value), parseFloat(warpSlider.value));
            }
        }

        heightSlider.addEventListener('input', syncSliders);
        warpSlider.addEventListener('input', syncSliders);

        // Continuous Telemetry Number Display loop
        setInterval(() => {
            let base = 215;
            let jitter = (Math.random() - 0.5) * 1.8;
            let currentDisplayTemp = (base + jitter).toFixed(1);
            document.getElementById('live-temp').innerText = currentDisplayTemp + "°C";
            
            let layerNum = ((parseFloat(heightSlider.value) / 100) * 0.2).toFixed(3);
            document.getElementById('live-layer').innerText = layerNum + " mm";

            const status = document.getElementById('live-status');
            if (parseFloat(warpSlider.value) > 30 || parseFloat(currentDisplayTemp) > 215.7) {
                status.innerText = "CRITICAL DEVIATION";
                status.style.color = "#ff4a4a";
            } else {
                status.innerText = "OPERATIONAL";
                status.style.color = "#39ec5c";
            }
        }, 1000);

        // Conversational AI Logic Pipeline
        function handleKeyPress(e) { if (e.key === 'Enter') sendMessage(); }

        async function sendMessage() {
            const input = document.getElementById('chat-input');
            const messageText = input.value.trim();
            if (!messageText) return;

            const history = document.getElementById('chat-history');
            const userDiv = document.createElement('div');
            userDiv.className = 'msg user-msg';
            userDiv.innerText = messageText;
            history.appendChild(userDiv);
            input.value = '';
            history.scrollTop = history.scrollHeight;

            const aiDiv = document.createElement('div');
            aiDiv.className = 'msg ai-msg';
            aiDiv.innerText = "Thinking...";
            history.appendChild(aiDiv);
            history.scrollTop = history.scrollHeight;

            // Gathering active workbench slider parameters to contextualize the agent prompt matrix
            const telemetryData = {
                temp: document.getElementById('live-temp').innerText,
                layerHeight: document.getElementById('live-layer').innerText,
                progress: heightSlider.value + "%",
                warping: warpSlider.value + "μm",
                status: document.getElementById('live-status').innerText
            };

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: messageText,
                        telemetry: {
                            temp: telemetryData.temp,
                            layer: telemetryData.layerHeight,
                            speed: "60 mm/s (Progress: " + telemetryData.progress + ", Warping: " + telemetryData.warping + ")",
                            status: telemetryData.status
                        }
                    })
                });

                const data = await response.json();
                aiDiv.innerText = data.reply || data.error;
            } catch (error) {
                aiDiv.innerText = "System fallback: Conversation offline. Logged telemetry parameters are stable.";
            }
            history.scrollTop = history.scrollHeight;
        }
    </script>
</body>
</html>