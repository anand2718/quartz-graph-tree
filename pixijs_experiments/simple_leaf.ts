import { Application, Graphics, GraphicsContext, Polygon } from 'pixi.js';

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);    
    const leafContext = new GraphicsContext()
        .scale(.5)
        .bezierCurveTo(50, -50, 100, 0, 125, 0)
        .bezierCurveTo(100, 0, 50, 50, 0, 0)
        .fill({ color: 0x51A687, alpha: 0.5 })
        .stroke({ width: 3, color: 0x51A687, cap: "round", join: "round" })
        .moveTo(25, 0)
        .lineTo(75, 0)
        .stroke({ width: 2, color: 0x51A687, cap: "round" });

    // Rough outline of the scaled bezier (stem at the origin, tip at x = 62.5).
    leafContext.hitArea = new Polygon([
        0, 0,
        11, -8,
        19, -10.5,
        26, -11,
        36, -9.5,
        45, -6,
        54, -2.5,
        62.5, 0,
        54, 2.5,
        45, 6,
        36, 9.5,
        26, 11,
        19, 10.5,
        11, 8,
    ]);
        
    const gfx = new Graphics(leafContext);
    gfx.position.set(100, 100);
    gfx.rotation = Math.random() * Math.PI * 2;
   
    gfx.eventMode = 'static';
    gfx.cursor = 'pointer';
    gfx.on('pointerover', () => {
        gfx.tint = 0xa8e6cf;
    });
    gfx.on('pointerout', () => {
        gfx.tint = 0xffffff;
    });

    app.stage.addChild(gfx);

    // Remember that context is properly destroyed when 
    // actually used! 
})();