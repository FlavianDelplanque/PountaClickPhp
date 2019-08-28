<?php 


class Users extends Database {

	public function infoUsers($info) {
		if (preg_match("#^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$#",$info)) {
			$info = 'mail="'.$info.'"';
		}
		else {
			$info = 'id="'.$info.'"';
		}
		$users = $this->connect();
		$usersInfo = $users->query('SELECT * FROM users WHERE '.$info); 
		$usersInfo = $usersInfo->fetch();
		return $usersInfo;
	}

}
 ?>