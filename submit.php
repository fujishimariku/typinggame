<?php
file_put_contents("./data", $_GET['name'].",".$_GET['points'].$_GET['lang'].",".$_GET['comment'].",".$_GET['month'].",".$_GET['kigou'].",".$_GET['day']."\n", FILE_APPEND);