// Stub

function buildSigmaGraph(nuskhaExpression) {
    // This is basically the slope. Change to 1, or even 'fractional' values if needed, 
    // to make space for constraints
    var XYRATIO = 2;

    var nuskhaGraph = nuskhaExpression["graph"];
    var sigmaJSON = {};
    var nodeArray = [];
    var edgeArray = [];
    var nextEdgeId = 0;
    var Y = 0;
    var yCoordinates = {};
    var colorMap = {};

    for (var i = 0; i < nuskhaGraph.length; i++) {

        var node = nuskhaGraph[i];

        // Building ingredient flow edges
        for (var j = 0; j < node.ingr.length; j++) {
            var ingredient = node.ingr[j];
            edgeArray.push({
                id: nextEdgeId.toString(),
                label: 'Edge ' + j,
                target: node.id.toString(),
                source: ingredient.toString(),
                color: colors[Math.floor(Math.random() * colors.length)],
                type: "t",
            });
            nextEdgeId++;
        }

        // Building time(0) ingredient nodes
        if (node.time < 1) {
            var sigmaNode = {
                id: node.id.toString(),
                label: node.label,
                x: 0,
                y: Y,
                size: 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                type: "circle"
            }
            nodeArray.push(sigmaNode);
            yCoordinates[node.id] = Y;
            colorMap[node.id] = sigmaNode["color"];
            Y++;
        // Building time(> 0) action nodes
        } else {
            
            var nextColor;
            
            if (node.ingr.length === 1) {
                nextColor = colorMap[node.ingr[0]];
            } else {
                nextColor = colors[Math.floor(Math.random() * colors.length)];
            } 
            var sigmaNode = {
                id: node.id.toString(),
                label: node.label,
                x: node.time*XYRATIO,    
                y: yCoordinates[node.ingr[0]],
                size: 5,
                color: nextColor,
                type: "square"
            }

            nodeArray.push(sigmaNode);
            yCoordinates[node.id] = yCoordinates[node.ingr[0]];
            colorMap[node.id] = sigmaNode["color"];
        }
    }

    sigmaJSON["nodes"] = nodeArray;
    sigmaJSON["edges"] = edgeArray;

    return sigmaJSON;
}