<?php
    function decodeJSON($file){
        $JSON = file_get_contents($file);
        return json_decode($JSON,true);
    }
    function encodeJSON($file){
        $JSON = json_encode($file);
        return $JSON;
    }
    function write($file,$string){
        $fp = fopen($file,'w');
        fwrite($fp,$string);
        fclose($fp);
    }
    if(isset($_POST['submit'])){ 
        $file = "data.json";
        $JSON = decodeJSON($file);
        $newData = array('name' => $_POST['text'],'status'=>'not_removed','selected'=>"false");
        array_push($JSON,$newData);
        $JSONstring = encodeJSON($JSON);
        write($file,$JSONstring);
    }
?>