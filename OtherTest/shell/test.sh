#/bin/bash

ui_branch_cover="2"
ls
if [ -n "$ui_branch_cover" ]; then
    echo "not empty"
fi

cd ./dir
ls
cd ../
