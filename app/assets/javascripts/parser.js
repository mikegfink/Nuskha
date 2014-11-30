function parse(str) {
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
  }

  /*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING: 	This parser template will not run as console and has lesser
    features for debugging than the console derivates for the
    various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
  */

  var rhino_dbg_withtrace		= false;
  var rhino_dbg_string			= new String();

  function __rhinodbg_print( text )
  {
    rhino_dbg_string += text + "\n";
  }

  function __rhinolex( info )
  {
    var state		= 0;
    var match		= -1;
    var match_pos	= 0;
    var start		= 0;
    var pos			= info.offset + 1;

    do
    {
      pos--;
      state = 0;
      match = -2;
      start = pos;

      if( info.src.length <= start )
	return 45;

      do
      {

        switch( state )
        {
	  case 0:
	  if( info.src.charCodeAt( pos ) == 32 ) state = 1;
	  else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
	  else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
	  else if( info.src.charCodeAt( pos ) == 44 ) state = 4;
	  else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 5;
	  else if( info.src.charCodeAt( pos ) == 59 ) state = 6;
	  else if( info.src.charCodeAt( pos ) == 61 ) state = 7;
	  else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 98 || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 101 ) || info.src.charCodeAt( pos ) == 104 || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 108 ) || info.src.charCodeAt( pos ) == 110 || ( info.src.charCodeAt( pos ) >= 114 && info.src.charCodeAt( pos ) <= 115 ) || info.src.charCodeAt( pos ) == 118 || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 76 ) state = 9;
	  else if( info.src.charCodeAt( pos ) == 103 ) state = 10;
	  else if( info.src.charCodeAt( pos ) == 9 ) state = 32;
	  else if( info.src.charCodeAt( pos ) == 97 ) state = 34;
	  else if( info.src.charCodeAt( pos ) == 109 ) state = 35;
	  else if( info.src.charCodeAt( pos ) == 111 ) state = 36;
	  else if( info.src.charCodeAt( pos ) == 112 ) state = 37;
	  else if( info.src.charCodeAt( pos ) == 113 ) state = 38;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 39;
	  else if( info.src.charCodeAt( pos ) == 68 ) state = 51;
	  else if( info.src.charCodeAt( pos ) == 99 ) state = 52;
	  else if( info.src.charCodeAt( pos ) == 102 ) state = 53;
	  else if( info.src.charCodeAt( pos ) == 105 ) state = 60;
	  else if( info.src.charCodeAt( pos ) == 119 ) state = 61;
	  else if( info.src.charCodeAt( pos ) == 117 ) state = 64;
	  else if( info.src.charCodeAt( pos ) == 73 ) state = 72;
	  else state = -1;
	  break;

	  case 1:
	  state = -1;
	  match = 1;
	  match_pos = pos;
	  break;

	  case 2:
	  state = -1;
	  match = 28;
	  match_pos = pos;
	  break;

	  case 3:
	  state = -1;
	  match = 31;
	  match_pos = pos;
	  break;

	  case 4:
	  state = -1;
	  match = 30;
	  match_pos = pos;
	  break;

	  case 5:
	  if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 5;
	  else if( info.src.charCodeAt( pos ) == 46 ) state = 11;
	  else if( info.src.charCodeAt( pos ) == 67 ) state = 12;
	  else if( info.src.charCodeAt( pos ) == 70 ) state = 13;
	  else state = -1;
	  match = 23;
	  match_pos = pos;
	  break;

	  case 6:
	  state = -1;
	  match = 29;
	  match_pos = pos;
	  break;

	  case 7:
	  state = -1;
	  match = 27;
	  match_pos = pos;
	  break;

	  case 8:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 9:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 11;
	  match_pos = pos;
	  break;

	  case 10:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 97 ) state = 43;
	  else state = -1;
	  match = 13;
	  match_pos = pos;
	  break;

	  case 11:
	  if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 33;
	  else state = -1;
	  match = 26;
	  match_pos = pos;
	  break;

	  case 12:
	  state = -1;
	  match = 24;
	  match_pos = pos;
	  break;

	  case 13:
	  state = -1;
	  match = 25;
	  match_pos = pos;
	  break;

	  case 14:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 21;
	  match_pos = pos;
	  break;

	  case 15:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 12;
	  match_pos = pos;
	  break;

	  case 16:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 5;
	  match_pos = pos;
	  break;

	  case 17:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 14;
	  match_pos = pos;
	  break;

	  case 18:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 15;
	  match_pos = pos;
	  break;

	  case 19:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 16;
	  match_pos = pos;
	  break;

	  case 20:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 6;
	  match_pos = pos;
	  break;

	  case 21:
	  state = -1;
	  match = 3;
	  match_pos = pos;
	  break;

	  case 22:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 10;
	  match_pos = pos;
	  break;

	  case 23:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 19;
	  match_pos = pos;
	  break;

	  case 24:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 17;
	  match_pos = pos;
	  break;

	  case 25:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 8;
	  match_pos = pos;
	  break;

	  case 26:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 18;
	  match_pos = pos;
	  break;

	  case 27:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 20;
	  match_pos = pos;
	  break;

	  case 28:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 9;
	  match_pos = pos;
	  break;

	  case 29:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 4;
	  match_pos = pos;
	  break;

	  case 30:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else state = -1;
	  match = 7;
	  match_pos = pos;
	  break;

	  case 31:
	  state = -1;
	  match = 2;
	  match_pos = pos;
	  break;

	  case 32:
	  if( info.src.charCodeAt( pos ) == 10 ) state = 1;
	  else state = -1;
	  break;

	  case 33:
	  if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 33;
	  else state = -1;
	  match = 23;
	  match_pos = pos;
	  break;

	  case 34:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 14;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 35:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 76 ) state = 15;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 36:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 121 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 110 ) state = 16;
	  else if( info.src.charCodeAt( pos ) == 122 ) state = 17;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 37:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 18;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 38:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 19;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 39:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 111 ) state = 20;
	  else if( info.src.charCodeAt( pos ) == 115 ) state = 44;
	  else if( info.src.charCodeAt( pos ) == 98 ) state = 56;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 40:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 58 ) state = 21;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 41:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 112 ) state = 22;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 42:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 114 ) state = 23;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 43:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 108 ) state = 24;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 44:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 112 ) state = 25;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 45:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 108 ) || ( info.src.charCodeAt( pos ) >= 110 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 109 ) state = 26;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 46:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 111 ) state = 27;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 47:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 112 ) state = 28;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 48:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 104 ) state = 29;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 49:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 108 ) state = 30;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 50:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 58 ) state = 31;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 51:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 79 ) state = 40;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 52:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 116 ) || ( info.src.charCodeAt( pos ) >= 118 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 117 ) state = 41;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 53:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 111 ) state = 42;
	  else if( info.src.charCodeAt( pos ) == 114 ) state = 54;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 54:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 111 ) state = 45;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 55:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 46;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 56:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 115 ) state = 47;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 57:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 48;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 58:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 105 ) state = 49;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 59:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 83 ) state = 50;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 60:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 110 ) state = 55;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 61:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 105 ) state = 57;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 62:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 116 ) state = 58;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 63:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 84 ) state = 59;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 64:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 110 ) state = 62;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 65:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 78 ) state = 63;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 66:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 69 ) state = 65;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 67:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 73 ) state = 66;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 68:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 68 ) state = 67;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 69:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 69 ) state = 68;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 70:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 82 ) state = 69;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 71:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 72 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 71 ) state = 70;
	  else state = -1;
	  match = 22;
	  match_pos = pos;
	  break;

	  case 72:
	  if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 8;
	  else if( info.src.charCodeAt( pos ) == 78 ) state = 71;
	  else state = -1;
	  match = 22;
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
	case 26:
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


  function __rhinoparse( src, err_off, err_la )
  {
    var		sstack			= new Array();
    var		vstack			= new Array();
    var 	err_cnt			= 0;
    var		act;
    var		go;
    var		la;
    var		rval;
    var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
    var		info			= new parseinfo();
    
    /* Pop-Table */
    var pop_tab = new Array(
      new Array( 0/* nuskha' */, 1 ),
      new Array( 34/* nuskha */, 3 ),
      new Array( 34/* nuskha */, 6 ),
      new Array( 33/* instructions */, 5 ),
      new Array( 35/* ingrs */, 3 ),
      new Array( 35/* ingrs */, 1 ),
      new Array( 35/* ingrs */, 4 ),
      new Array( 37/* ingr */, 2 ),
      new Array( 37/* ingr */, 3 ),
      new Array( 37/* ingr */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 38/* measurement */, 1 ),
      new Array( 36/* steps */, 3 ),
      new Array( 36/* steps */, 2 ),
      new Array( 39/* step */, 1 ),
      new Array( 39/* step */, 2 ),
      new Array( 40/* action */, 2 ),
      new Array( 40/* action */, 4 ),
      new Array( 40/* action */, 4 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 2 ),
      new Array( 41/* modifier */, 3 ),
      new Array( 43/* time */, 2 ),
      new Array( 44/* temp */, 1 ),
      new Array( 44/* temp */, 1 ),
      new Array( 44/* temp */, 1 ),
      new Array( 42/* item */, 3 ),
      new Array( 42/* item */, 1 ),
      new Array( 42/* item */, 1 ),
      new Array( 32/* ing */, 1 ),
      new Array( 32/* ing */, 2 )
    );

    /* Action-Table */
    var act_tab = new Array(
      /* State 0 */ new Array( 22/* "STRING" */,3 ),
      /* State 1 */ new Array( 45/* "$" */,0 ),
      /* State 2 */ new Array( 28/* "(" */,4 , 27/* "=" */,5 ),
      /* State 3 */ new Array( 22/* "STRING" */,3 , 27/* "=" */,-42 , 28/* "(" */,-42 , 31/* ")" */,-42 , 29/* ";" */,-42 , 30/* "," */,-42 , 45/* "$" */,-42 , 4/* "with" */,-42 , 5/* "on" */,-42 , 7/* "until" */,-42 , 19/* "for" */,-42 , 20/* "into" */,-42 , 21/* "at" */,-42 , 6/* "to" */,-42 ),
      /* State 4 */ new Array( 22/* "STRING" */,3 ),
      /* State 5 */ new Array( 2/* "INGREDIENTS:" */,9 ),
      /* State 6 */ new Array( 27/* "=" */,-43 , 28/* "(" */,-43 , 31/* ")" */,-43 , 29/* ";" */,-43 , 30/* "," */,-43 , 45/* "$" */,-43 , 4/* "with" */,-43 , 5/* "on" */,-43 , 7/* "until" */,-43 , 19/* "for" */,-43 , 20/* "into" */,-43 , 21/* "at" */,-43 , 6/* "to" */,-43 ),
      /* State 7 */ new Array( 31/* ")" */,10 ),
      /* State 8 */ new Array( 45/* "$" */,-1 ),
      /* State 9 */ new Array( 23/* "NUMBER" */,13 , 22/* "STRING" */,3 ),
      /* State 10 */ new Array( 27/* "=" */,15 ),
      /* State 11 */ new Array( 30/* "," */,16 , 29/* ";" */,17 ),
      /* State 12 */ new Array( 28/* "(" */,18 , 29/* ";" */,-5 , 30/* "," */,-5 ),
      /* State 13 */ new Array( 22/* "STRING" */,3 , 8/* "tsp" */,21 , 9/* "tbsp" */,22 , 10/* "cup" */,23 , 11/* "L" */,24 , 12/* "mL" */,25 , 13/* "g" */,26 , 14/* "oz" */,27 , 15/* "pt" */,28 , 16/* "qt" */,29 , 17/* "gal" */,30 ),
      /* State 14 */ new Array( 29/* ";" */,-9 , 30/* "," */,-9 , 28/* "(" */,-9 ),
      /* State 15 */ new Array( 2/* "INGREDIENTS:" */,9 ),
      /* State 16 */ new Array( 23/* "NUMBER" */,13 , 22/* "STRING" */,3 ),
      /* State 17 */ new Array( 3/* "DO:" */,33 ),
      /* State 18 */ new Array( 22/* "STRING" */,3 ),
      /* State 19 */ new Array( 22/* "STRING" */,3 ),
      /* State 20 */ new Array( 29/* ";" */,-7 , 30/* "," */,-7 , 28/* "(" */,-7 ),
      /* State 21 */ new Array( 22/* "STRING" */,-10 ),
      /* State 22 */ new Array( 22/* "STRING" */,-11 ),
      /* State 23 */ new Array( 22/* "STRING" */,-12 ),
      /* State 24 */ new Array( 22/* "STRING" */,-13 ),
      /* State 25 */ new Array( 22/* "STRING" */,-14 ),
      /* State 26 */ new Array( 22/* "STRING" */,-15 ),
      /* State 27 */ new Array( 22/* "STRING" */,-16 ),
      /* State 28 */ new Array( 22/* "STRING" */,-17 ),
      /* State 29 */ new Array( 22/* "STRING" */,-18 ),
      /* State 30 */ new Array( 22/* "STRING" */,-19 ),
      /* State 31 */ new Array( 45/* "$" */,-2 ),
      /* State 32 */ new Array( 30/* "," */,-4 , 29/* ";" */,-4 ),
      /* State 33 */ new Array( 26/* "STEP" */,37 ),
      /* State 34 */ new Array( 31/* ")" */,38 ),
      /* State 35 */ new Array( 29/* ";" */,-8 , 30/* "," */,-8 , 28/* "(" */,-8 ),
      /* State 36 */ new Array( 29/* ";" */,39 , 45/* "$" */,-3 ),
      /* State 37 */ new Array( 22/* "STRING" */,42 ),
      /* State 38 */ new Array( 29/* ";" */,-6 , 30/* "," */,-6 ),
      /* State 39 */ new Array( 26/* "STEP" */,37 ),
      /* State 40 */ new Array( 45/* "$" */,-21 , 29/* ";" */,-21 ),
      /* State 41 */ new Array( 4/* "with" */,45 , 5/* "on" */,46 , 7/* "until" */,47 , 19/* "for" */,48 , 20/* "into" */,49 , 21/* "at" */,50 , 28/* "(" */,51 , 45/* "$" */,-22 , 29/* ";" */,-22 ),
      /* State 42 */ new Array( 22/* "STRING" */,52 , 23/* "NUMBER" */,54 ),
      /* State 43 */ new Array( 29/* ";" */,-20 , 45/* "$" */,-20 ),
      /* State 44 */ new Array( 4/* "with" */,45 , 5/* "on" */,46 , 7/* "until" */,47 , 19/* "for" */,48 , 20/* "into" */,49 , 21/* "at" */,50 , 28/* "(" */,51 , 45/* "$" */,-23 , 29/* ";" */,-23 ),
      /* State 45 */ new Array( 22/* "STRING" */,3 ),
      /* State 46 */ new Array( 22/* "STRING" */,3 ),
      /* State 47 */ new Array( 22/* "STRING" */,3 ),
      /* State 48 */ new Array( 23/* "NUMBER" */,61 ),
      /* State 49 */ new Array( 22/* "STRING" */,3 ),
      /* State 50 */ new Array( 24/* "TEMPC" */,64 , 25/* "TEMPF" */,65 , 22/* "STRING" */,66 ),
      /* State 51 */ new Array( 22/* "STRING" */,3 ),
      /* State 52 */ new Array( 18/* "from" */,68 , 22/* "STRING" */,3 , 45/* "$" */,-42 , 29/* ";" */,-42 , 4/* "with" */,-42 , 5/* "on" */,-42 , 7/* "until" */,-42 , 19/* "for" */,-42 , 20/* "into" */,-42 , 21/* "at" */,-42 , 28/* "(" */,-42 , 6/* "to" */,-42 , 30/* "," */,-42 ),
      /* State 53 */ new Array( 30/* "," */,69 , 6/* "to" */,70 , 45/* "$" */,-24 , 29/* ";" */,-24 , 4/* "with" */,-24 , 5/* "on" */,-24 , 7/* "until" */,-24 , 19/* "for" */,-24 , 20/* "into" */,-24 , 21/* "at" */,-24 , 28/* "(" */,-24 ),
      /* State 54 */ new Array( 45/* "$" */,-40 , 29/* ";" */,-40 , 4/* "with" */,-40 , 5/* "on" */,-40 , 7/* "until" */,-40 , 19/* "for" */,-40 , 20/* "into" */,-40 , 21/* "at" */,-40 , 28/* "(" */,-40 , 6/* "to" */,-40 , 30/* "," */,-40 ),
      /* State 55 */ new Array( 45/* "$" */,-41 , 29/* ";" */,-41 , 4/* "with" */,-41 , 5/* "on" */,-41 , 7/* "until" */,-41 , 19/* "for" */,-41 , 20/* "into" */,-41 , 21/* "at" */,-41 , 28/* "(" */,-41 , 6/* "to" */,-41 , 30/* "," */,-41 ),
      /* State 56 */ new Array( 4/* "with" */,45 , 5/* "on" */,46 , 7/* "until" */,47 , 19/* "for" */,48 , 20/* "into" */,49 , 21/* "at" */,50 , 28/* "(" */,51 , 45/* "$" */,-27 , 29/* ";" */,-27 ),
      /* State 57 */ new Array( 45/* "$" */,-28 , 29/* ";" */,-28 , 4/* "with" */,-28 , 5/* "on" */,-28 , 7/* "until" */,-28 , 19/* "for" */,-28 , 20/* "into" */,-28 , 21/* "at" */,-28 , 28/* "(" */,-28 ),
      /* State 58 */ new Array( 45/* "$" */,-29 , 29/* ";" */,-29 , 4/* "with" */,-29 , 5/* "on" */,-29 , 7/* "until" */,-29 , 19/* "for" */,-29 , 20/* "into" */,-29 , 21/* "at" */,-29 , 28/* "(" */,-29 ),
      /* State 59 */ new Array( 45/* "$" */,-30 , 29/* ";" */,-30 , 4/* "with" */,-30 , 5/* "on" */,-30 , 7/* "until" */,-30 , 19/* "for" */,-30 , 20/* "into" */,-30 , 21/* "at" */,-30 , 28/* "(" */,-30 ),
      /* State 60 */ new Array( 45/* "$" */,-31 , 29/* ";" */,-31 , 4/* "with" */,-31 , 5/* "on" */,-31 , 7/* "until" */,-31 , 19/* "for" */,-31 , 20/* "into" */,-31 , 21/* "at" */,-31 , 28/* "(" */,-31 ),
      /* State 61 */ new Array( 22/* "STRING" */,71 ),
      /* State 62 */ new Array( 45/* "$" */,-32 , 29/* ";" */,-32 , 4/* "with" */,-32 , 5/* "on" */,-32 , 7/* "until" */,-32 , 19/* "for" */,-32 , 20/* "into" */,-32 , 21/* "at" */,-32 , 28/* "(" */,-32 ),
      /* State 63 */ new Array( 45/* "$" */,-33 , 29/* ";" */,-33 , 4/* "with" */,-33 , 5/* "on" */,-33 , 7/* "until" */,-33 , 19/* "for" */,-33 , 20/* "into" */,-33 , 21/* "at" */,-33 , 28/* "(" */,-33 ),
      /* State 64 */ new Array( 45/* "$" */,-36 , 29/* ";" */,-36 , 4/* "with" */,-36 , 5/* "on" */,-36 , 7/* "until" */,-36 , 19/* "for" */,-36 , 20/* "into" */,-36 , 21/* "at" */,-36 , 28/* "(" */,-36 ),
      /* State 65 */ new Array( 45/* "$" */,-37 , 29/* ";" */,-37 , 4/* "with" */,-37 , 5/* "on" */,-37 , 7/* "until" */,-37 , 19/* "for" */,-37 , 20/* "into" */,-37 , 21/* "at" */,-37 , 28/* "(" */,-37 ),
      /* State 66 */ new Array( 45/* "$" */,-38 , 29/* ";" */,-38 , 4/* "with" */,-38 , 5/* "on" */,-38 , 7/* "until" */,-38 , 19/* "for" */,-38 , 20/* "into" */,-38 , 21/* "at" */,-38 , 28/* "(" */,-38 ),
      /* State 67 */ new Array( 31/* ")" */,72 ),
      /* State 68 */ new Array( 23/* "NUMBER" */,54 , 22/* "STRING" */,3 ),
      /* State 69 */ new Array( 23/* "NUMBER" */,54 , 22/* "STRING" */,3 ),
      /* State 70 */ new Array( 23/* "NUMBER" */,54 , 22/* "STRING" */,3 ),
      /* State 71 */ new Array( 45/* "$" */,-35 , 29/* ";" */,-35 , 4/* "with" */,-35 , 5/* "on" */,-35 , 7/* "until" */,-35 , 19/* "for" */,-35 , 20/* "into" */,-35 , 21/* "at" */,-35 , 28/* "(" */,-35 ),
      /* State 72 */ new Array( 45/* "$" */,-34 , 29/* ";" */,-34 , 4/* "with" */,-34 , 5/* "on" */,-34 , 7/* "until" */,-34 , 19/* "for" */,-34 , 20/* "into" */,-34 , 21/* "at" */,-34 , 28/* "(" */,-34 ),
      /* State 73 */ new Array( 30/* "," */,69 , 45/* "$" */,-26 , 29/* ";" */,-26 , 4/* "with" */,-26 , 5/* "on" */,-26 , 7/* "until" */,-26 , 19/* "for" */,-26 , 20/* "into" */,-26 , 21/* "at" */,-26 , 28/* "(" */,-26 ),
      /* State 74 */ new Array( 30/* "," */,-39 , 45/* "$" */,-39 , 29/* ";" */,-39 , 4/* "with" */,-39 , 5/* "on" */,-39 , 7/* "until" */,-39 , 19/* "for" */,-39 , 20/* "into" */,-39 , 21/* "at" */,-39 , 28/* "(" */,-39 , 6/* "to" */,-39 ),
      /* State 75 */ new Array( 30/* "," */,69 , 45/* "$" */,-25 , 29/* ";" */,-25 , 4/* "with" */,-25 , 5/* "on" */,-25 , 7/* "until" */,-25 , 19/* "for" */,-25 , 20/* "into" */,-25 , 21/* "at" */,-25 , 28/* "(" */,-25 )
    );

    /* Goto-Table */
    var goto_tab = new Array(
      /* State 0 */ new Array( 34/* nuskha */,1 , 32/* ing */,2 ),
      /* State 1 */ new Array(  ),
      /* State 2 */ new Array(  ),
      /* State 3 */ new Array( 32/* ing */,6 ),
      /* State 4 */ new Array( 32/* ing */,7 ),
      /* State 5 */ new Array( 33/* instructions */,8 ),
      /* State 6 */ new Array(  ),
      /* State 7 */ new Array(  ),
      /* State 8 */ new Array(  ),
      /* State 9 */ new Array( 35/* ingrs */,11 , 37/* ingr */,12 , 32/* ing */,14 ),
      /* State 10 */ new Array(  ),
      /* State 11 */ new Array(  ),
      /* State 12 */ new Array(  ),
      /* State 13 */ new Array( 38/* measurement */,19 , 32/* ing */,20 ),
      /* State 14 */ new Array(  ),
      /* State 15 */ new Array( 33/* instructions */,31 ),
      /* State 16 */ new Array( 35/* ingrs */,32 , 37/* ingr */,12 , 32/* ing */,14 ),
      /* State 17 */ new Array(  ),
      /* State 18 */ new Array( 32/* ing */,34 ),
      /* State 19 */ new Array( 32/* ing */,35 ),
      /* State 20 */ new Array(  ),
      /* State 21 */ new Array(  ),
      /* State 22 */ new Array(  ),
      /* State 23 */ new Array(  ),
      /* State 24 */ new Array(  ),
      /* State 25 */ new Array(  ),
      /* State 26 */ new Array(  ),
      /* State 27 */ new Array(  ),
      /* State 28 */ new Array(  ),
      /* State 29 */ new Array(  ),
      /* State 30 */ new Array(  ),
      /* State 31 */ new Array(  ),
      /* State 32 */ new Array(  ),
      /* State 33 */ new Array( 36/* steps */,36 ),
      /* State 34 */ new Array(  ),
      /* State 35 */ new Array(  ),
      /* State 36 */ new Array(  ),
      /* State 37 */ new Array( 39/* step */,40 , 40/* action */,41 ),
      /* State 38 */ new Array(  ),
      /* State 39 */ new Array( 36/* steps */,43 ),
      /* State 40 */ new Array(  ),
      /* State 41 */ new Array( 41/* modifier */,44 ),
      /* State 42 */ new Array( 42/* item */,53 , 32/* ing */,55 ),
      /* State 43 */ new Array(  ),
      /* State 44 */ new Array( 41/* modifier */,56 ),
      /* State 45 */ new Array( 32/* ing */,57 ),
      /* State 46 */ new Array( 32/* ing */,58 ),
      /* State 47 */ new Array( 32/* ing */,59 ),
      /* State 48 */ new Array( 43/* time */,60 ),
      /* State 49 */ new Array( 32/* ing */,62 ),
      /* State 50 */ new Array( 44/* temp */,63 ),
      /* State 51 */ new Array( 32/* ing */,67 ),
      /* State 52 */ new Array( 32/* ing */,6 ),
      /* State 53 */ new Array(  ),
      /* State 54 */ new Array(  ),
      /* State 55 */ new Array(  ),
      /* State 56 */ new Array( 41/* modifier */,56 ),
      /* State 57 */ new Array(  ),
      /* State 58 */ new Array(  ),
      /* State 59 */ new Array(  ),
      /* State 60 */ new Array(  ),
      /* State 61 */ new Array(  ),
      /* State 62 */ new Array(  ),
      /* State 63 */ new Array(  ),
      /* State 64 */ new Array(  ),
      /* State 65 */ new Array(  ),
      /* State 66 */ new Array(  ),
      /* State 67 */ new Array(  ),
      /* State 68 */ new Array( 42/* item */,73 , 32/* ing */,55 ),
      /* State 69 */ new Array( 42/* item */,74 , 32/* ing */,55 ),
      /* State 70 */ new Array( 42/* item */,75 , 32/* ing */,55 ),
      /* State 71 */ new Array(  ),
      /* State 72 */ new Array(  ),
      /* State 73 */ new Array(  ),
      /* State 74 */ new Array(  ),
      /* State 75 */ new Array(  )
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
      "L" /* Terminal symbol */,
      "mL" /* Terminal symbol */,
      "g" /* Terminal symbol */,
      "oz" /* Terminal symbol */,
      "pt" /* Terminal symbol */,
      "qt" /* Terminal symbol */,
      "gal" /* Terminal symbol */,
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
      err_off	= new Array();
    if( !err_la )
      err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __rhinolex( info );

    while( true )
    {
      act = 77;
      for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
      {
	if( act_tab[sstack[sstack.length-1]][i] == la )
	{
	  act = act_tab[sstack[sstack.length-1]][i+1];
	  break;
	}
      }

      if( rhino_dbg_withtrace && sstack.length > 0 )
      {
	__rhinodbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
			  "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
			  "\tAction: " + act + "\n" + 
			  "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
									          "..." : "" ) + "\"\n" +
			  "\tStack: " + sstack.join() + "\n" +
			  "\tValue stack: " + vstack.join() + "\n" );
      }
      
      
      //Panic-mode: Try recovery when parse-error occurs!
      if( act == 77 )
      {
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
	
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
	
	while( act == 77 && la != 45 )
	{
	  if( rhino_dbg_withtrace )
	    __rhinodbg_print( "\tError recovery\n" +
			      "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
			      "Action: " + act + "\n\n" );
	  if( la == -1 )
	    info.offset++;
	  
	  while( act == 77 && sstack.length > 0 )
	  {
	    sstack.pop();
	    vstack.pop();
	    
	    if( sstack.length == 0 )
	      break;
	    
	    act = 77;
	    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
	    {
	      if( act_tab[sstack[sstack.length-1]][i] == la )
	      {
		act = act_tab[sstack[sstack.length-1]][i+1];
		break;
	      }
	    }
	  }
	  
	  if( act != 77 )
	    break;
	  
	  for( var i = 0; i < rsstack.length; i++ )
	  {
	    sstack.push( rsstack[i] );
	    vstack.push( rvstack[i] );
	  }
	  
	  la = __rhinolex( info );
	}
	
	if( act == 77 )
	{
	  if( rhino_dbg_withtrace )
	    __rhinodbg_print( "\tError recovery failed, terminating parse process..." );
	  break;
	}


	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "\tError recovery succeeded, continuing" );
      }
      
      /*
	if( act == 77 )
	break;
      */
      
      
      //Shift
      if( act > 0 )
      {			
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
	
	sstack.push( act );
	vstack.push( info.att );
	
	la = __rhinolex( info );
	
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
      }
      //Reduce
      else
      {		
	act *= -1;
	
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "Reducing by producution: " + act );
	
	rval = void(0);
	
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "\tPerforming semantic action..." );
	
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
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 14:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 15:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 16:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 17:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 18:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 19:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 20:
	  {
	    rval = vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ]); 
	  }
	  break;
	  case 21:
	  {
	    rval = [vstack[ vstack.length - 1 ]]; 
	  }
	  break;
	  case 22:
	  {
	    rval = createAction(vstack[ vstack.length - 1 ], null); 
	  }
	  break;
	  case 23:
	  {
	    rval = createAction(vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	  }
	  break;
	  case 24:
	  {
	    rval = [vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]]; 
	  }
	  break;
	  case 25:
	  {
	    rval = [vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ])]; 
	  }
	  break;
	  case 26:
	  {
	    rval = [vstack[ vstack.length - 4 ] + " " + vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
	  }
	  break;
	  case 27:
	  {
	    rval = vstack[ vstack.length - 2 ].concat(vstack[ vstack.length - 1 ]); 
	  }
	  break;
	  case 28:
	  {
	    rval = [{"utensil": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 29:
	  {
	    rval = [{"location": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 30:
	  {
	    rval = [{"fulfill": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 31:
	  {
	    rval = [{"duration": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 32:
	  {
	    rval = [{"shape": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 33:
	  {
	    rval = [{"temp": vstack[ vstack.length - 1 ]}]; 
	  }
	  break;
	  case 34:
	  {
	    rval = [{"instruction": vstack[ vstack.length - 2 ]}]; 
	  }
	  break;
	  case 35:
	  {
	    rval = vstack[ vstack.length - 2 ] + " " + vstack[ vstack.length - 1 ]; 
	  }
	  break;
	  case 36:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 37:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 38:
	  {
	    rval = vstack[ vstack.length - 1 ];
	  }
	  break;
	  case 39:
	  {
	    rval = vstack[ vstack.length - 3 ].concat(vstack[ vstack.length - 1 ]); 
	  }
	  break;
	  case 40:
	  {
	    rval = [h[vstack[ vstack.length - 1 ].toString()]]; 
	  }
	  break;
	  case 41:
	  {
	    rval = [h[vstack[ vstack.length - 1 ]]]; 
	  }
	  break;
	  case 42:
	  {
	    rval = vstack[ vstack.length - 1 ]; 
	  }
	  break;
	  case 43:
	  {
	    rval = vstack[ vstack.length - 2 ] + " " + vstack[ vstack.length - 1 ]; 
	  }
	  break;
        }



	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
	
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
	
	if( rhino_dbg_withtrace )
	  __rhinodbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
	
	sstack.push( go );
	vstack.push( rval );			
      }
      
      if( rhino_dbg_withtrace )
      {		
	alert( rhino_dbg_string );
	rhino_dbg_string = new String();
      }
    }

    if( rhino_dbg_withtrace )
    {
      __rhinodbg_print( "\nParse complete." );
      alert( rhino_dbg_string );
    }
    
    return err_cnt;
  }



  var error_offsets = new Array();
  var error_lookaheads = new Array();
  var error_count = 0;

  /* Switching one of these variables on will enable debug facilities
     of the various parser drivers */
  //rhino_dbg_withtrace = true;
  //rhino_dbg_withparsetree = true;
  //rhino_dbg_withstepbystep = true;

  if( ( error_count = __rhinoparse( str,
                                    error_offsets, error_lookaheads ) ) > 0 )
  {
    return null;
  } else {
    return nuskha_result;
  }
}

