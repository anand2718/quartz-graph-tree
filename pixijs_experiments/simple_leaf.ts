import { Application, Graphics,  GraphicsContext} from 'pixi.js';

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);    

    const leafContext = new GraphicsContext().moveTo(50, 50)
        .bezierCurveTo(
            100, 0,
            150, 50,
            175, 50
        )
        .moveTo(50, 50)
        .bezierCurveTo(
            100, 100,
            150, 50,
            175, 50,
            0.0
        )
        .stroke({ width: 2, color: 0x51A687 })
        .moveTo(75, 50)
        .lineTo(125, 50)
        .stroke({ width: 1, color: 0x51A687 });

    const gfx = new Graphics(leafContext);

    app.stage.addChild(gfx);

    // Remember that context is properly destroyed when 
    // actually used! 
})();