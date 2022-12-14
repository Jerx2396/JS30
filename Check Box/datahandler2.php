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
    if(isset($_POST['name'])){
        $file = "data.json";
        print_r($_POST);
        $JSON = decodeJSON($file);
        $index = $_POST['index'];
        unset($_POST['index']);
        for($i=0;$i<count($JSON);$i++){
            if($i==$index){
                $JSON[$i] = $_POST;
            }
        }
        $JSONstring = encodeJSON($JSON);
        write($file,$JSONstring);
    }
?>