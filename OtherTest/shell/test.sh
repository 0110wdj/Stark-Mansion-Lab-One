#/bin/bash

ui_branch_cover="2"
ls
if [ -n "$ui_branch_cover" ]; then
    echo "not empty"
fi


cd ./dir
for file in *; do
  if [ -f "$file" ]; then  # 确保是文件而非目录
    # 处理 .tar.gz 文件
    if [[ "$file" =~ \.tar\.gz$ ]]; then
      new_name="${file%.tar.gz}-submodule-unstable.tar.gz"
      mv "$file" "$new_name"
    # 处理 .tar.xz 文件
    elif [[ "$file" =~ \.tar\.xz$ ]]; then
      new_name="${file%.tar.xz}-submodule-unstable.tar.xz"
      mv "$file" "$new_name"
    # 处理 .sh 文件
    elif [[ "$file" =~ \.sh$ ]]; then
      new_name="${file%.sh}-submodule-unstable.sh"
      mv "$file" "$new_name"
    fi
  fi
done
cd ../
