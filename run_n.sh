#!/usr/bin/bash

# File that creates all configuration to code
# node configurations.js
num_of_users=$(<configurations/num_of_users)
progressive_load=$(<configurations/progressive_load)
progressive_load_timeout=$(<configurations/progressive_load_timeout)
terminal_name=$(<configurations/terminal_name)
shell_name=$(<configurations/shell_name)
# number of users loop
for (( c=0; c<$num_of_users; c++ ))
do
  $terminal_name -e "$shell_name -c \"node index.js; exec $shell_name\""
  # maintain wait between concurrent user requests
  if [ "$progressive_load" == "true" ]; then
    sleep $progressive_load_timeout
  fi
done
