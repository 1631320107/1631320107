﻿var swf_width=540;
var swf_height=215;
var files='/Upload/FlashPhotoUpload/201110/77ef9ee4-dc0e-42f7-86a3-cdda471dab20.jpg|/Upload/FlashPhotoUpload/201110/c229334a-81f4-43d8-bd10-c8115140e54e.jpg|/Upload/FlashPhotoUpload/201110/75a15711-db60-4e83-ac5f-f7e523af4a27.jpg';
var links='http://www.skyces.com|http://www.socoshop.com|http://www.iabcweb.com';
var texts='||';
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="/Upload/FlashPhotoUpload/picturePlayer.swf"><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name="wmode" value="opaque">');
document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'">');
document.write('<embed src="/Upload/FlashPhotoUpload/picturePlayer.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+' menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>'); 
