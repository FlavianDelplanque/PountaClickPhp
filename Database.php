<?php 

class Database {
    
    private $dbname='pountaclick';
    private $dbuser='root';
    private $dbhost='localhost';
    private $dbpassword='';
    
    public function __construct() 
    {
        
    }
    
    protected function connect()
    {
        $user = "root";
        $pass = "";
        $pdo = new PDO('mysql:host=localhost;dbname=pountaclick', $user, $pass);
        return $pdo;
    }
    
    /*
     *  @param string
     * Envoie la requete et la confirme
     */
    protected function is_ok($request)
    {
        $insertIsOk = $request->execute();
        if($insertIsOk){
            $message="c'est ok";
        }else{
            $message="c'est pas ok";
        }
        return $message;        
    }
    
}


 ?>