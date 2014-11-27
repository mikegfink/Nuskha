var nuskhaExpression = {
    "recipe": {
        "title": "Braised Short Ribs",
        "style": "Szechuan"
    },
    "graph": [
        {
            "vid": 1,
            "time": 0,
            "label": "spare rib",
            "ingr": [],
            "description": "pork (preferred) or beef"
        },
        {
            "vid": 2,
            "time": 1,
            "label": "cut",
            "ingr": [
                1
            ],
            "constraints": {
                "shape": "butterfly",
                "amount": "1 lb",
                "utensil": "knife"
            }
        },
        {
            "vid": 3,
            "time": 0,
            "label": "black pepper",
            "ingr": [],
            "constraints": {
                "amount": "1 teaspoon"
            }
        },
        {
            "vid": 4,
            "time": 0,
            "label": "soy sauce",
            "ingr": [],
            "constraints": {
                "amount": "2 tablespoons"
            }
        },
        {
            "vid": 5,
            "time": 0,
            "label": "sugar",
            "ingr": [],
            "constraints": {
                "amount": "1/8th cup"
            }
        },
        {
            "vid": 6,
            "time": 0,
            "label": "cornstarch",
            "ingr": [],
            "constraints": {
                "amount": "1 tablespoon"
            }
        },
        {
            "vid": 7,
            "time": 2,
            "label": "marinate",
            "ingr": [
                2,
                3,
                4,
                5,
                6
            ],
            "constraints": {
                "duration": "30 minutes",
                "location": "bowl"
            }
        },
        {
            "vid": 8,
            "time": 0,
            "label": "black pepper",
            "ingr": [],
            "constraints": {
                "instruction": "to taste"
            }
        },
        {
            "vid": 9,
            "time": 0,
            "label": "honey",
            "ingr": [],
            "constraints": {
                "amount": "2 tablespoons"
            }
        },
        {
            "vid": 10,
            "time": 0,
            "label": "soy sauce",
            "ingr": [],
            "constraints": {
                "amount": "1 tablespoon"
            }
        },
        {
            "vid": 11,
            "time": 0,
            "label": "cornstarch",
            "ingr": [],
            "constraints": {
                "amount": "1 teaspoon"
            }
        },
        {
            "vid": 12,
            "time": 0,
            "label": "water",
            "ingr": [],
            "constraints": {
                "amount": "2 tablespoons"
            }
        },
        {
            "vid": 13,
            "time": 3,
            "label": "mix",
            "ingr": [
                8,
                9,
                10,
                11,
                12
            ],
            "constraints": {
                "fulfill": "cornstarch is dissolved"
            }
        },
        {
            "vid": 14,
            "time": 0,
            "label": "oil",
            "ingr": [],
            "constraints": {
                "amount": "200 mL"
            }
        },
        {
            "vid": 15,
            "time": 4,
            "label": "heat",
            "ingr": [
                14
            ],
            "constraints": {
                "temp": "hot",
                "location": "wok"
            }
        },
        {
            "vid": 16,
            "time": 5,
            "label": "deep-fry",
            "ingr": [
                7,
                15
            ],
            "constraints": {
                "location": "wok"
            }
        },
        {
            "vid": 17,
            "time": 6,
            "label": "remove",
            "ingr": [
                16
            ],
            "constraints": {
                "fulfill": "spare ribs turn brown"
            }
        },
        {
            "vid": 18,
            "time": 0,
            "label": "oil",
            "ingr": [],
            "constraints": {
                "amount": "1 tablespoon"
            }
        },
        {
            "vid": 19,
            "time": 7,
            "label": "heat",
            "ingr": [
                18
            ],
            "constraints": {
                "temp": "hot",
                "location": "wok"
            }
        },
        {
            "vid": 20,
            "time": 8,
            "label": "stir",
            "ingr": [
                13,
                19
            ],
            "constraints": {
                "instructions": "stir quickly",
                "location": "wok"
            }
        },
        {
            "vid": 21,
            "time": 9,
            "label": "boil",
            "ingr": [
                20
            ]
        },
        {
            "vid": 22,
            "time": 9,
            "label": "stir",
            "ingr": [
                17,
                21
            ],
            "constraints": {
                "duration": "briefly"
            }
        },
        {
            "vid": 23,
            "time": 10,
            "label": "simmer",
            "ingr": [
                22
            ],
            "constraints": {
                "duration": "1-2 minutes"
            }
        },
        {
            "vid": 24,
            "time": 11,
            "label": "remove",
            "ingr": [
                23
            ]
        }
    ]
};


function buildSigmaGraph(nuskhaExpression) {
    var nuskhaGraph = nuskhaExpression["graph"];
    var sigmaJSON = {};
    var nodeArray = [];
    var edgeArray = [];
    var nextEdgeId = 0;
    var Y =0;

    for (var i = 0; i < nuskhaGraph.length; i++) {
        var node = nuskhaGraph[i];

        if (node.time === 0) {
             nodeArray.push({
            "id": node.vid.toString(),
            "label": node.label,
            "x": 5,
            "y" : Y,
            "size": 2
        });
             Y++;
        } else {
        nodeArray.push({
            "id": node.vid.toString(),
            "label": node.label,
            "x": node.time+5,
            "y" : 0,
            "size": 2
        });
    }
        // Building 'Ingredient Flow' edges
        for (var j = 0; j < node.ingr.length; j++) {
            var edge = node.ingr[j];
            edgeArray.push({
                "id": nextEdgeId.toString(),
                "label": 'Edge ' + j,
                "target": node.vid.toString(),
                "source": node.ingr[j].toString(),
                "type": "arrow"
            });
            nextEdgeId++;
        }

    }
    // Building 'Time Flow' edges
    for (var k = 0; k < nuskhaGraph.length; k++) {

    }

    sigmaJSON["nodes"] = nodeArray;
    sigmaJSON["edges"] = edgeArray;

    return sigmaJSON;
}

function averageY(node) {
    Yarray = [];
    ingredients
    for (var i = 0; i < node.ingr.length; i++) {
        
    };
}