#!/usr/bin/bash

# File that creates all configuration to code
# node configurations.js
num_of_users=$(<configurations/num_of_users)
progressive_load=$(<configurations/progressive_load)
progressive_load_timeout=$(<configurations/progressive_load_timeout)
echo $num_of_users $progressive_load $progressive_load_timeout
# number of users loop
for (( c=0; c<$num_of_users; c++ ))
do
  gnome-terminal -e 'node index.js'
  # maintain wait between concurrent user requests
  if [ "$progressive_load" == "true" ]; then
    echo $progressive_load
  fi
  sleep $progressive_load_timeout
done
