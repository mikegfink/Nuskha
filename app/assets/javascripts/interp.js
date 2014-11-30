// Stub

function buildSigmaGraph(nuskhaExpression) {
    // This is basically the slope. Change to 1, or even 'fractional' values if needed, 
    // to make space for constraints
    var XYRATIO = 1;

    var nuskhaGraph = nuskhaExpression["graph"];
    
    var sigmaJSON = {};
    var nodeArray = [];
    var edgeArray = [];

    var nextEdgeId = 0;
    var nextY = 0;
    var yCoordinateMap = {};
    var nextColorIndex = 0;
    var colorMap = {};
    
    colors = shuffleArray(colors); //long live mutation

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
                type: "t",
            });
            nextEdgeId++;
        }

        // Building time(0) ingredient nodes
        if (node.time === 0) {
            var sigmaNode = {
                id: node.id.toString(),
                label: node.label,
                x: 0,
                y: nextY,
                size: 5,
                color: colors[nextColorIndex],
                type: "circle"
            }
            nodeArray.push(sigmaNode);
            yCoordinateMap[node.id] = nextY;
            colorMap[node.id] = sigmaNode["color"];
            nextY++;
            nextColorIndex++;

        // Building time(> 0) action nodes
        } else {
            // If a node has a single ingredient, then inherit itss color
            var nextColor;
            if (node.ingr.length === 1) {
                nextColor = colorMap[node.ingr[0]];
            } else {
                nextColor = colors[nextColorIndex];
                nextColorIndex++;
            }

            var sigmaNode = {
                id: node.id.toString(),
                label: node.label,
                x: node.time*XYRATIO,    
                y: yCoordinateMap[node.ingr[0]],
                size: 5,
                color: nextColor,
                type: "square"
            }

            nodeArray.push(sigmaNode);
            yCoordinateMap[node.id] = yCoordinateMap[node.ingr[0]];
            colorMap[node.id] = sigmaNode["color"];
        }
    }

    sigmaJSON["nodes"] = nodeArray;
    sigmaJSON["edges"] = edgeArray;

    return sigmaJSON;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random()*(i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        return array;
}