var ID_NUM = 1;
var h = new Object;
var STEP_NUM = 1;
var nuskha_result = new Object;

function getId()
{
vid = ID_NUM++;
return vid;
}
function createIngredient(name,description)
{
h[name[0]] = ID_NUM;
if (name[1] == null) {
if (description == null) {
return {"id": getId(), "type": "ingredient", "time": 0, "label": name[0], "ingr": []};
} else {
return {"id": getId(), "type": "ingredient", "time": 0, "label": name[0], "ingr": [], "description": description};
}
} else {
if (description == null) {
return {"id": getId(), "type": "ingredient", "time": 0, "label": name[0], "ingr": [], "constraints": [name[1]]};
} else {
return {"id": getId(), "type": "ingredient", "time": 0, "label": name[0], "ingr": [], "description": description, "constraints": [name[1]]};
}
}
}
function createAction(ingr,constraints)
{
time = STEP_NUM++;
if (constraints == null) {
return {"id": getId(), "type": "action", "time": time, "label": ingr[0], "ingr": ingr[1]};
} else {
return {"id": getId(), "type": "action", "time": time, "label": ingr[0], "ingr": ingr[1], "constraints": constraints};
}
}
function setHash(key)
{
h[key] = ID_NUM;
}
function setNuskha(obj)
{
nuskha_result = obj;
alert(nuskha_result);
}

/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING:     This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
*/

var _dbg_withtrace        = false;
var _dbg_string            = new String();

function __dbg_print( text )
{
    _dbg_string += text + "\n";
}

function __lex( info )
{
    var state        = 0;
    var match        = -1;
    var match_pos    = 0;
    var start        = 0;
    var pos            = info.offset + 1;

    do
    {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if( info.src.length <= start )
            return 38;

        do
        {

switch( state )
{
    case 0:
        if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
        else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
        else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
        else if( info.src.charCodeAt( pos ) == 44 ) state = 4;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 5;
        else if( info.src.charCodeAt( pos ) == 59 ) state = 6;
        else if( info.src.charCodeAt( pos ) == 61 ) state = 7;
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 98 || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 115 ) || info.src.charCodeAt( pos ) == 118 || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 25;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 26;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 27;
        else if( info.src.charCodeAt( pos ) == 68 ) state = 38;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 39;
        else if( info.src.charCodeAt( pos ) == 102 ) state = 40;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 47;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 48;
        else if( info.src.charCodeAt( pos ) == 117 ) state = 51;
        else if( info.src.charCodeAt( pos ) == 73 ) state = 59;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 5:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 5;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 9;
        else if( info.src.charCodeAt( pos ) == 67 ) state = 10;
        else if( info.src.charCodeAt( pos ) == 70 ) state = 11;
        else state = -1;
        match = 16;
        match_pos = pos;
        break;

    case 6:
        state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 8:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 19;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 17;
        match_pos = pos;
        break;

    case 11:
        state = -1;
        match = 18;
        match_pos = pos;
        break;

    case 12:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 13:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 14:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 15:
        state = -1;
        match = 3;
        match_pos = pos;
        break;

    case 16:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 17:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 18:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 19:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 20:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 21:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 22:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 4;
        match_pos = pos;
        break;

    case 23:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 24:
        state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 25:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 12;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 26:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 13;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 27:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 14;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 31;
        else if( info.src.charCodeAt( pos ) == 98 ) state = 43;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 28:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 58 ) state = 15;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 29:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 112 ) state = 16;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 30:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 114 ) state = 17;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 31:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 112 ) state = 18;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 32:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 108 ) || ( info.src.charCodeAt( pos ) >= 110 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 109 ) state = 19;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 33:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 20;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 34:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 112 ) state = 21;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 35:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 22;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 36:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 23;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 37:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 58 ) state = 24;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 38:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 79 ) state = 28;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 39:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 116 ) || ( info.src.charCodeAt( pos ) >= 118 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 117 ) state = 29;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 40:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 30;
        else if( info.src.charCodeAt( pos ) == 114 ) state = 41;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 41:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 32;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 42:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 33;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 43:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 34;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 44:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 35;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 45:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 36;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 46:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 83 ) state = 37;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 47:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 42;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 48:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 44;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 49:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 45;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 50:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 84 ) state = 46;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 51:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 49;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 52:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 78 ) state = 50;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 53:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 69 ) state = 52;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 54:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 73 ) state = 53;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 55:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 68 ) state = 54;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 56:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 69 ) state = 55;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 57:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 82 ) state = 56;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 58:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 72 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 71 ) state = 57;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 59:
        if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 78 ) state = 58;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

}


            pos++;

        }
        while( state > -1 );

    }
    while( 1 > -1 && match == 1 );

    if( match > -1 )
    {
        info.att = info.src.substr( start, match_pos - start );
        info.offset = match_pos;
        
switch( match )
{
    case 19:
        {
         info.att = setHash(info.att.substring(0,info.att.length - 1));
        }
        break;

}


    }
    else
    {
        info.att = new String();
        match = -1;
    }

    return match;
}


function __parse( src, err_off, err_la )
{
    var        sstack            = new Array();
    var        vstack            = new Array();
    var     err_cnt            = 0;
    var        act;
    var        go;
    var        la;
    var        rval;
    var     parseinfo        = new Function( "", "var offset; var src; var att;" );
    var        info            = new parseinfo();
    
/* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* nuskha' */, 1 ),
    new Array( 27/* nuskha */, 3 ),
    new Array( 27/* nuskha */, 6 ),
    new Array( 26/* instructions */, 5 ),
    new Array( 28/* ingrs */, 3 ),
    new Array( 28/* ingrs */, 1 ),
    new Array( 28/* ingrs */, 4 ),
    new Array( 30/* ingr */, 2 ),
    new Array( 30/* ingr */, 3 ),
    new Array( 30/* ingr */, 1 ),
    new Array( 31/* measurement */, 1 ),
    new Array( 31/* measurement */, 1 ),
    new Array( 31/* measurement */, 1 ),
    new Array( 29/* steps */, 3 ),
    new Array( 29/* steps */, 2 ),
    new Array( 32/* step */, 1 ),
    new Array( 32/* step */, 2 ),
    new Array( 33/* action */, 2 ),
    new Array( 33/* action */, 4 ),
    new Array( 33/* action */, 4 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 2 ),
    new Array( 34/* modifier */, 3 ),
    new Array( 36/* time */, 2 ),
    new Array( 37/* temp */, 1 ),
    new Array( 37/* temp */, 1 ),
    new Array( 37/* temp */, 1 ),
    new Array( 35/* item */, 3 ),
    new Array( 35/* item */, 1 ),
    new Array( 35/* item */, 1 ),
    new Array( 25/* ing */, 1 ),
    new Array( 25/* ing */, 2 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 15/* "STRING" */,3 ),
    /* State 1 */ new Array( 38/* "$" */,0 ),
    /* State 2 */ new Array( 21/* "(" */,4 , 20/* "=" */,5 ),
    /* State 3 */ new Array( 15/* "STRING" */,3 , 20/* "=" */,-35 , 21/* "(" */,-35 , 24/* ")" */,-35 , 22/* ";" */,-35 , 23/* "," */,-35 , 38/* "$" */,-35 , 4/* "with" */,-35 , 5/* "on" */,-35 , 7/* "until" */,-35 , 12/* "for" */,-35 , 13/* "into" */,-35 , 14/* "at" */,-35 , 6/* "to" */,-35 ),
    /* State 4 */ new Array( 15/* "STRING" */,3 ),
    /* State 5 */ new Array( 2/* "INGREDIENTS:" */,9 ),
    /* State 6 */ new Array( 20/* "=" */,-36 , 21/* "(" */,-36 , 24/* ")" */,-36 , 22/* ";" */,-36 , 23/* "," */,-36 , 38/* "$" */,-36 , 4/* "with" */,-36 , 5/* "on" */,-36 , 7/* "until" */,-36 , 12/* "for" */,-36 , 13/* "into" */,-36 , 14/* "at" */,-36 , 6/* "to" */,-36 ),
    /* State 7 */ new Array( 24/* ")" */,10 ),
    /* State 8 */ new Array( 38/* "$" */,-1 ),
    /* State 9 */ new Array( 16/* "NUMBER" */,13 , 15/* "STRING" */,3 ),
    /* State 10 */ new Array( 20/* "=" */,15 ),
    /* State 11 */ new Array( 23/* "," */,16 , 22/* ";" */,17 ),
    /* State 12 */ new Array( 21/* "(" */,18 , 22/* ";" */,-5 , 23/* "," */,-5 ),
    /* State 13 */ new Array( 15/* "STRING" */,3 , 8/* "tsp" */,21 , 9/* "tbsp" */,22 , 10/* "cup" */,23 ),
    /* State 14 */ new Array( 22/* ";" */,-9 , 23/* "," */,-9 , 21/* "(" */,-9 ),
    /* State 15 */ new Array( 2/* "INGREDIENTS:" */,9 ),
    /* State 16 */ new Array( 16/* "NUMBER" */,13 , 15/* "STRING" */,3 ),
    /* State 17 */ new Array( 3/* "DO:" */,26 ),
    /* State 18 */ new Array( 15/* "STRING" */,3 ),
    /* State 19 */ new Array( 15/* "STRING" */,3 ),
    /* State 20 */ new Array( 22/* ";" */,-7 , 23/* "," */,-7 , 21/* "(" */,-7 ),
    /* State 21 */ new Array( 15/* "STRING" */,-10 ),
    /* State 22 */ new Array( 15/* "STRING" */,-11 ),
    /* State 23 */ new Array( 15/* "STRING" */,-12 ),
    /* State 24 */ new Array( 38/* "$" */,-2 ),
    /* State 25 */ new Array( 23/* "," */,-4 , 22/* ";" */,-4 ),
    /* State 26 */ new Array( 19/* "STEP" */,30 ),
    /* State 27 */ new Array( 24/* ")" */,31 ),
    /* State 28 */ new Array( 22/* ";" */,-8 , 23/* "," */,-8 , 21/* "(" */,-8 ),
    /* State 29 */ new Array( 22/* ";" */,32 , 38/* "$" */,-3 ),
    /* State 30 */ new Array( 15/* "STRING" */,35 ),
    /* State 31 */ new Array( 22/* ";" */,-6 , 23/* "," */,-6 ),
    /* State 32 */ new Array( 19/* "STEP" */,30 ),
    /* State 33 */ new Array( 38/* "$" */,-14 , 22/* ";" */,-14 ),
    /* State 34 */ new Array( 4/* "with" */,38 , 5/* "on" */,39 , 7/* "until" */,40 , 12/* "for" */,41 , 13/* "into" */,42 , 14/* "at" */,43 , 21/* "(" */,44 , 38/* "$" */,-15 , 22/* ";" */,-15 ),
    /* State 35 */ new Array( 15/* "STRING" */,45 , 16/* "NUMBER" */,47 ),
    /* State 36 */ new Array( 22/* ";" */,-13 , 38/* "$" */,-13 ),
    /* State 37 */ new Array( 4/* "with" */,38 , 5/* "on" */,39 , 7/* "until" */,40 , 12/* "for" */,41 , 13/* "into" */,42 , 14/* "at" */,43 , 21/* "(" */,44 , 38/* "$" */,-16 , 22/* ";" */,-16 ),
    /* State 38 */ new Array( 15/* "STRING" */,50 ),
    /* State 39 */ new Array( 15/* "STRING" */,51 ),
    /* State 40 */ new Array( 15/* "STRING" */,52 ),
    /* State 41 */ new Array( 16/* "NUMBER" */,54 ),
    /* State 42 */ new Array( 15/* "STRING" */,55 ),
    /* State 43 */ new Array( 17/* "TEMPC" */,57 , 18/* "TEMPF" */,58 , 15/* "STRING" */,59 ),
    /* State 44 */ new Array( 15/* "STRING" */,3 ),
    /* State 45 */ new Array( 11/* "from" */,61 , 15/* "STRING" */,3 , 38/* "$" */,-35 , 22/* ";" */,-35 , 4/* "with" */,-35 , 5/* "on" */,-35 , 7/* "until" */,-35 , 12/* "for" */,-35 , 13/* "into" */,-35 , 14/* "at" */,-35 , 21/* "(" */,-35 , 6/* "to" */,-35 , 23/* "," */,-35 ),
    /* State 46 */ new Array( 23/* "," */,62 , 6/* "to" */,63 , 38/* "$" */,-17 , 22/* ";" */,-17 , 4/* "with" */,-17 , 5/* "on" */,-17 , 7/* "until" */,-17 , 12/* "for" */,-17 , 13/* "into" */,-17 , 14/* "at" */,-17 , 21/* "(" */,-17 ),
    /* State 47 */ new Array( 38/* "$" */,-33 , 22/* ";" */,-33 , 4/* "with" */,-33 , 5/* "on" */,-33 , 7/* "until" */,-33 , 12/* "for" */,-33 , 13/* "into" */,-33 , 14/* "at" */,-33 , 21/* "(" */,-33 , 6/* "to" */,-33 , 23/* "," */,-33 ),
    /* State 48 */ new Array( 38/* "$" */,-34 , 22/* ";" */,-34 , 4/* "with" */,-34 , 5/* "on" */,-34 , 7/* "until" */,-34 , 12/* "for" */,-34 , 13/* "into" */,-34 , 14/* "at" */,-34 , 21/* "(" */,-34 , 6/* "to" */,-34 , 23/* "," */,-34 ),
    /* State 49 */ new Array( 4/* "with" */,38 , 5/* "on" */,39 , 7/* "until" */,40 , 12/* "for" */,41 , 13/* "into" */,42 , 14/* "at" */,43 , 21/* "(" */,44 , 38/* "$" */,-20 , 22/* ";" */,-20 ),
    /* State 50 */ new Array( 38/* "$" */,-21 , 22/* ";" */,-21 , 4/* "with" */,-21 , 5/* "on" */,-21 , 7/* "until" */,-21 , 12/* "for" */,-21 , 13/* "into" */,-21 , 14/* "at" */,-21 , 21/* "(" */,-21 ),
    /* State 51 */ new Array( 38/* "$" */,-22 , 22/* ";" */,-22 , 4/* "with" */,-22 , 5/* "on" */,-22 , 7/* "until" */,-22 , 12/* "for" */,-22 , 13/* "into" */,-22 , 14/* "at" */,-22 , 21/* "(" */,-22 ),
    /* State 52 */ new Array( 38/* "$" */,-23 , 22/* ";" */,-23 , 4/* "with" */,-23 , 5/* "on" */,-23 , 7/* "until" */,-23 , 12/* "for" */,-23 , 13/* "into" */,-23 , 14/* "at" */,-23 , 21/* "(" */,-23 ),
    /* State 53 */ new Array( 38/* "$" */,-24 , 22/* ";" */,-24 , 4/* "with" */,-24 , 5/* "on" */,-24 , 7/* "until" */,-24 , 12/* "for" */,-24 , 13/* "into" */,-24 , 14/* "at" */,-24 , 21/* "(" */,-24 ),
    /* State 54 */ new Array( 15/* "STRING" */,64 ),
    /* State 55 */ new Array( 38/* "$" */,-25 , 22/* ";" */,-25 , 4/* "with" */,-25 , 5/* "on" */,-25 , 7/* "until" */,-25 , 12/* "for" */,-25 , 13/* "into" */,-25 , 14/* "at" */,-25 , 21/* "(" */,-25 ),
    /* State 56 */ new Array( 38/* "$" */,-26 , 22/* ";" */,-26 , 4/* "with" */,-26 , 5/* "on" */,-26 , 7/* "until" */,-26 , 12/* "for" */,-26 , 13/* "into" */,-26 , 14/* "at" */,-26 , 21/* "(" */,-26 ),
    /* State 57 */ new Array( 38/* "$" */,-29 , 22/* ";" */,-29 , 4/* "with" */,-29 , 5/* "on" */,-29 , 7/* "until" */,-29 , 12/* "for" */,-29 , 13/* "into" */,-29 , 14/* "at" */,-29 , 21/* "(" */,-29 ),
    /* State 58 */ new Array( 38/* "$" */,-30 , 22/* ";" */,-30 , 4/* "with" */,-30 , 5/* "on" */,-30 , 7/* "until" */,-30 , 12/* "for" */,-30 , 13/* "into" */,-30 , 14/* "at" */,-30 , 21/* "(" */,-30 ),
    /* State 59 */ new Array( 38/* "$" */,-31 , 22/* ";" */,-31 , 4/* "with" */,-31 , 5/* "on" */,-31 , 7/* "until" */,-31 , 12/* "for" */,-31 , 13/* "into" */,-31 , 14/* "at" */,-31 , 21/* "(" */,-31 ),
    /* State 60 */ new Array( 24/* ")" */,65 ),
    /* State 61 */ new Array( 16/* "NUMBER" */,47 , 15/* "STRING" */,3 ),
    /* State 62 */ new Array( 16/* "NUMBER" */,47 , 15/* "STRING" */,3 ),
    /* State 63 */ new Array( 16/* "NUMBER" */,47 , 15/* "STRING" */,3 ),
    /* State 64 */ new Array( 38/* "$" */,-28 , 22/* ";" */,-28 , 4/* "with" */,-28 , 5/* "on" */,-28 , 7/* "until" */,-28 , 12/* "for" */,-28 , 13/* "into" */,-28 , 14/* "at" */,-28 , 21/* "(" */,-28 ),
    /* State 65 */ new Array( 38/* "$" */,-27 , 22/* ";" */,-27 , 4/* "with" */,-27 , 5/* "on" */,-27 , 7/* "until" */,-27 , 12/* "for" */,-27 , 13/* "into" */,-27 , 14/* "at" */,-27 , 21/* "(" */,-27 ),
    /* State 66 */ new Array( 23/* "," */,62 , 38/* "$" */,-19 , 22/* ";" */,-19 , 4/* "with" */,-19 , 5/* "on" */,-19 , 7/* "until" */,-19 , 12/* "for" */,-19 , 13/* "into" */,-19 , 14/* "at" */,-19 , 21/* "(" */,-19 ),
    /* State 67 */ new Array( 23/* "," */,-32 , 38/* "$" */,-32 , 22/* ";" */,-32 , 4/* "with" */,-32 , 5/* "on" */,-32 , 7/* "until" */,-32 , 12/* "for" */,-32 , 13/* "into" */,-32 , 14/* "at" */,-32 , 21/* "(" */,-32 , 6/* "to" */,-32 ),
    /* State 68 */ new Array( 23/* "," */,62 , 38/* "$" */,-18 , 22/* ";" */,-18 , 4/* "with" */,-18 , 5/* "on" */,-18 , 7/* "until" */,-18 , 12/* "for" */,-18 , 13/* "into" */,-18 , 14/* "at" */,-18 , 21/* "(" */,-18 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 27/* nuskha */,1 , 25/* ing */,2 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( 25/* ing */,6 ),
    /* State 4 */ new Array( 25/* ing */,7 ),
    /* State 5 */ new Array( 26/* instructions */,8 ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( ),
    /* State 9 */ new Array( 28/* ingrs */,11 , 30/* ingr */,12 , 25/* ing */,14 ),
    /* State 10 */ new Array( ),
    /* State 11 */ new Array( ),
    /* State 12 */ new Array( ),
    /* State 13 */ new Array( 31/* measurement */,19 , 25/* ing */,20 ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( 26/* instructions */,24 ),
    /* State 16 */ new Array( 28/* ingrs */,25 , 30/* ingr */,12 , 25/* ing */,14 ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( 25/* ing */,27 ),
    /* State 19 */ new Array( 25/* ing */,28 ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( ),
    /* State 22 */ new Array( ),
    /* State 23 */ new Array( ),
    /* State 24 */ new Array( ),
    /* State 25 */ new Array( ),
    /* State 26 */ new Array( 29/* steps */,29 ),
    /* State 27 */ new Array( ),
    /* State 28 */ new Array( ),
    /* State 29 */ new Array( ),
    /* State 30 */ new Array( 32/* step */,33 , 33/* action */,34 ),
    /* State 31 */ new Array( ),
    /* State 32 */ new Array( 29/* steps */,36 ),
    /* State 33 */ new Array( ),
    /* State 34 */ new Array( 34/* modifier */,37 ),
    /* State 35 */ new Array( 35/* item */,46 , 25/* ing */,48 ),
    /* State 36 */ new Array( ),
    /* State 37 */ new Array( 34/* modifier */,49 ),
    /* State 38 */ new Array( ),
    /* State 39 */ new Array( ),
    /* State 40 */ new Array( ),
    /* State 41 */ new Array( 36/* time */,53 ),
    /* State 42 */ new Array( ),
    /* State 43 */ new Array( 37/* temp */,56 ),
    /* State 44 */ new Array( 25/* ing */,60 ),
    /* State 45 */ new Array( 25/* ing */,6 ),
    /* State 46 */ new Array( ),
    /* State 47 */ new Array( ),
    /* State 48 */ new Array( ),
    /* State 49 */ new Array( 34/* modifier */,49 ),
    /* State 50 */ new Array( ),
    /* State 51 */ new Array( ),
    /* State 52 */ new Array( ),
    /* State 53 */ new Array( ),
    /* State 54 */ new Array( ),
    /* State 55 */ new Array( ),
    /* State 56 */ new Array( ),
    /* State 57 */ new Array( ),
    /* State 58 */ new Array( ),
    /* State 59 */ new Array( ),
    /* State 60 */ new Array( ),
    /* State 61 */ new Array( 35/* item */,66 , 25/* ing */,48 ),
    /* State 62 */ new Array( 35/* item */,67 , 25/* ing */,48 ),
    /* State 63 */ new Array( 35/* item */,68 , 25/* ing */,48 ),
    /* State 64 */ new Array( ),
    /* State 65 */ new Array( ),
    /* State 66 */ new Array( ),
    /* State 67 */ new Array( ),
    /* State 68 */ new Array( )
);



/* Symbol labels */
var labels = new Array(
    "nuskha'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "INGREDIENTS:" /* Terminal symbol */,
    "DO:" /* Terminal symbol */,
    "with" /* Terminal symbol */,
    "on" /* Terminal symbol */,
    "to" /* Terminal symbol */,
    "until" /* Terminal symbol */,
    "tsp" /* Terminal symbol */,
    "tbsp" /* Terminal symbol */,
    "cup" /* Terminal symbol */,
    "from" /* Terminal symbol */,
    "for" /* Terminal symbol */,
    "into" /* Terminal symbol */,
    "at" /* Terminal symbol */,
    "STRING" /* Terminal symbol */,
    "NUMBER" /* Terminal symbol */,
    "TEMPC" /* Terminal symbol */,
    "TEMPF" /* Terminal symbol */,
    "STEP" /* Terminal symbol */,
    "=" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ";" /* Terminal symbol */,
    "," /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "ing" /* Non-terminal symbol */,
    "instructions" /* Non-terminal symbol */,
    "nuskha" /* Non-terminal symbol */,
    "ingrs" /* Non-terminal symbol */,
    "steps" /* Non-terminal symbol */,
    "ingr" /* Non-terminal symbol */,
    "measurement" /* Non-terminal symbol */,
    "step" /* Non-terminal symbol */,
    "action" /* Non-terminal symbol */,
    "modifier" /* Non-terminal symbol */,
    "item" /* Non-terminal symbol */,
    "time" /* Non-terminal symbol */,
    "temp" /* Non-terminal symbol */,
    "$" /* Terminal symbol */
);


    
    info.offset = 0;
    info.src = src;
    info.att = new String();
    
    if( !err_off )
        err_off    = new Array();
    if( !err_la )
    err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __lex( info );

    while( true )
    {
        act = 70;
        for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
        {
            if( act_tab[sstack[sstack.length-1]][i] == la )
            {
                act = act_tab[sstack[sstack.length-1]][i+1];
                break;
            }
        }

        if( _dbg_withtrace && sstack.length > 0 )
        {
            __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" +
                            "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
                                    "..." : "" ) + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n" );
        }
        
            
        //Panic-mode: Try recovery when parse-error occurs!
        if( act == 70 )
        {
            if( _dbg_withtrace )
                __dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
            
            err_cnt++;
            err_off.push( info.offset - info.att.length );            
            err_la.push( new Array() );
            for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
            
            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for( var i = 0; i < sstack.length; i++ )
            {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }
            
            while( act == 70 && la != 38 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;
                    
                while( act == 70 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();
                    
                    if( sstack.length == 0 )
                        break;
                        
                    act = 70;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }
                
                if( act != 70 )
                    break;
                
                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }
                
                la = __lex( info );
            }
            
            if( act == 70 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }
        
        /*
        if( act == 70 )
            break;
        */
        
        
        //Shift
        if( act > 0 )
        {            
            if( _dbg_withtrace )
                __dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
        
            sstack.push( act );
            vstack.push( info.att );
            
            la = __lex( info );
            
            if( _dbg_withtrace )
                __dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
        }
        //Reduce
        else
        {        
            act *= -1;
            
            if( _dbg_withtrace )
                __dbg_print( "Reducing by producution: " + act );
            
            rval = void(0);
            
            if( _dbg_withtrace )
                __dbg_print( "\tPerforming semantic action..." );
            
switch( act )
{
    case 0:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 1:
    {
         rval = setNuskha({"recipe": {"title": vstack[ vstack.length - 3 ] }, "graph": vstack[ vstack.length - 1 ]});
    }
    break;
    case 2:
    {
         rval = setNuskha({"recipe": {"title": vstack[ vstack.length - 6 ], "style": vstack[ vstack.length - 4 ]}, "graph": vstack[ vstack.length - 1 ]});
    }
    break;
    case 3:
    {
         rval = vstack[ vstack.length - 4 ].concat(vstack[ vstack.length - 1 ]);
    }
    break;
    case 4:
    {
         rval = vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ]);
    }
    break;
    case 5:
    {
         rval = [createIngredient(vstack[ vstack.length - 1 ],null)];
    }
    break;
    case 6:
    {
         rval = [createIngredient(vstack[ vstack.length - 4 ],vstack[ vstack.length - 2 ])];
    }
    break;
    case 7:
    {
         rval = [vstack[ vstack.length - 1 ], {"amount": vstack[ vstack.length - 2 ].toString()}];
    }
    break;
    case 8:
    {
         rval = [vstack[ vstack.length - 1 ], {"amount": vstack[ vstack.length - 3 ].toString() + " " + vstack[ vstack.length - 2 ]}];
    }
    break;
    case 9:
    {
         rval = [vstack[ vstack.length - 1 ], null];
    }
    break;
    case 10:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 11:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 12:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 13:
    {
         rval = vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ]);
    }
    break;
    case 14:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 15:
    {
         rval = createAction(vstack[ vstack.length - 1 ], null);
    }
    break;
    case 16:
    {
         rval = createAction(vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]);
    }
    break;
    case 17:
    {
         rval = [vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 18:
    {
         rval = [vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ])];
    }
    break;
    case 19:
    {
         rval = [vstack[ vstack.length - 4 ] + " " + vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 20:
    {
         rval = vstack[ vstack.length - 2 ].concat(vstack[ vstack.length - 1 ]);
    }
    break;
    case 21:
    {
         rval = [{"utensil": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 22:
    {
         rval = [{"location": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 23:
    {
         rval = [{"fulfill": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 24:
    {
         rval = [{"duration": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 25:
    {
         rval = [{"shape": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 26:
    {
         rval = [{"temp": vstack[ vstack.length - 1 ]}];
    }
    break;
    case 27:
    {
         rval = [{"instruction": vstack[ vstack.length - 2 ]}];
    }
    break;
    case 28:
    {
         rval = vstack[ vstack.length - 2 ] + " " + vstack[ vstack.length - 1 ];
    }
    break;
    case 29:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 30:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 31:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 32:
    {
         rval = vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ]);
    }
    break;
    case 33:
    {
         rval = [h[vstack[ vstack.length - 1 ].toString()]];
    }
    break;
    case 34:
    {
         rval = [h[vstack[ vstack.length - 1 ]]];
    }
    break;
    case 35:
    {
         rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 36:
    {
         rval = vstack[ vstack.length - 2 ] + " " + vstack[ vstack.length - 1 ];
    }
    break;
}



            if( _dbg_withtrace )
                __dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
                
            for( var i = 0; i < pop_tab[act][1]; i++ )
            {
                sstack.pop();
                vstack.pop();
            }
                                    
            go = -1;
            for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
            {
                if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
                {
                    go = goto_tab[sstack[sstack.length-1]][i+1];
                    break;
                }
            }
            
            if( act == 0 )
                break;
                
            if( _dbg_withtrace )
                __dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
                
            sstack.push( go );
            vstack.push( rval );            
        }
        
        if( _dbg_withtrace )
        {        
            alert( _dbg_string );
            _dbg_string = new String();
        }
    }

    if( _dbg_withtrace )
    {
        __dbg_print( "\nParse complete." );
        alert( _dbg_string );
    }
    
    return err_cnt;
}


var error_offsets = new Array(); var error_lookaheads = new Array(); var error_count = 0; var str = prompt( "Please enter a string to be parsed:", "" ); if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 ) { var errstr = new String(); for( var i = 0; i < error_count; i++ ) errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ; alert( errstr );}