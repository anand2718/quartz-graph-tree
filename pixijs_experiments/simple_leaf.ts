import { Application, Graphics,  GraphicsContext} from 'pixi.js';

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);    

    const leafContext = new GraphicsContext()
        .bezierCurveTo(
            50, -50,
            100, 0,
            125, 0
        )
        .moveTo(0, 0)
        .bezierCurveTo(
            50, 50,
            100, 0,
            125, 0,
            0.0
        )
        .stroke({ width: 2, color: 0x51A687 })
        .moveTo(25, 0)
        .lineTo(75, 0)
        .stroke({ width: 1, color: 0x51A687 });

    const gfx = new Graphics(leafContext);

    app.stage.addChild(gfx);

    // Remember that context is properly destroyed when 
    // actually used! 
})();