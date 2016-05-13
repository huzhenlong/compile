/**
 * @license jCanvas Crescents v13.12.24
 * Copyright 2013 Caleb Evans
 * Released under the MIT license
 */
(function ($, Math) {

// Cache some functions and constants
    var pow = Math.pow,
        sqrt = Math.sqrt,
        PI = Math.PI;

    $.jCanvas.extend({
        name: 'drawTooltip',
        type: 'tooltip',
        props: {
            eclipse: 0.5
        },
        fn: function (ctx, params) {
            // Just to keep our lines short
            var p = params;
            // Enable layer transformations like scale and rotate
            $.jCanvas.transformShape(this, ctx, p);
            // Draw heart
            ctx.beginPath();
            ctx.moveTo(p.x, p.y + p.radius);
            // Left side of heart
            ctx.quadraticCurveTo(
                p.x - (p.radius * 2),
                p.y - (p.radius * 2),
                p.x,
                p.y - (p.radius / 1.5)
            );
            // Right side of heart
            ctx.quadraticCurveTo(
                p.x + (p.radius * 2),
                p.y - (p.radius * 2),
                p.x,
                p.y + p.radius
            );

            $.jCanvas.detectEvents(this, ctx, p);
            $.jCanvas.closePath(this, ctx, p);

        }
    });

}(jQuery, Math));