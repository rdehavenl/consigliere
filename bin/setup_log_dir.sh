#!/bin/bash

LOG_DIR=/var/log/consigliere
mkdir -p $LOG_DIR
chgrp ec2-user $LOG_DIR
chmod 770 $LOG_DIR

