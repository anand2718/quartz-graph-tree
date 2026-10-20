import { Application, Graphics } from 'pixi.js';

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Draw a simple curved corner
    const graphics = new Graphics();
    graphics
        .moveTo(50, 50)
        .arcTo(100, 50, 100, 100, 20) // Rounded corner with 20px radius
        .stroke({ width: 2, color: 0xff0000 });

// Create a rounded rectangle using arcTo
// graphics
//     .moveTo(150, 150)
//     .arcTo(250, 150, 250, 250, 30) // Top right corner
//     .arcTo(250, 250, 150, 250, 30) // Bottom right corner
//     .arcTo(150, 250, 150, 150, 30) // Bottom left corner
//     .arcTo(150, 150, 250, 150, 30) // Top left corner
//     .fill({ color: 0x00ff00 });

    // Draw a simple elliptical arc
    graphics
        .moveTo(100, 100)
        .arcToSvg(50, 30, 0, 0, 1, 200, 100)
        .stroke({ width: 2, color: 0xff0000 });

    // Create a complex path with rotated elliptical arc
    graphics
        .moveTo(150, 150)
        .arcToSvg(
            60,    // rx
            30,    // ry
            45,    // x-axis rotation (45 degrees)
            1,     // large arc flag
            0,     // sweep flag
            250,   // end x
            200    // end y
        )
        .stroke({ width: 4, color: 0x00ff00 });

    // Chain multiple arcs for complex shapes
    graphics
        .moveTo(300, 100)
        .arcToSvg(40, 20, 0, 0, 1, 350, 150)
        .arcToSvg(40, 20, 0, 0, 1, 300, 200)
        .fill({ color: 0x0000ff, alpha: 0.5 });

    app.stage.addChild(graphics);
})();