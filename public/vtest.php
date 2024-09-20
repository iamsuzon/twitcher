<?php

// Define the path to the log file
$logFile = 'rtmp-logfile.log';

// Open the log file for appending
$log = fopen($logFile, 'a');

// Check if the file was opened successfully
if ($log) {
    // Write the current date and time to the log file
    fwrite($log, "Log Entry: " . date('Y-m-d H:i:s') . "\n");
    
    // Write the POST data to the log file
    fwrite($log, print_r($_POST, true) . "\n");
    
    // Close the log file
    fclose($log);
} else {
    // Handle the error if the file couldn't be opened
    error_log("Failed to open log file: $logFile");
}

