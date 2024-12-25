#/bin/bash

cd $WORKSPACE
echo "******** 查看基础配置********"
ls -l ~/.ssh/
id
date
echo "****************************"
echo "******** 配置ssh key********"
mkdir -p build
echo  "-v /home/peter/.ssh/id_rsa:/root/.ssh/id_rsa -v /home/peter/.ssh/known_hosts:/root/.ssh/known_hosts -v /home/peter/.cargo/env.docker:/root/.cargo/env " > build/ssh_args
cat build/ssh_args

date
echo "****************************"
echo "*************更新子模块***********"
git submodule init
git submodule update -f
echo "*************尝试覆盖前端模块代码***********"
echo $ui_branch_cover
if [ -n "$ui_branch_cover" ]; then
		cd ./components/shell/src
		git fetch -p
		git switch $ui_branch_cover
		git pull
		git log -1 --oneline
		cd ../../../
fi
echo "*************尝试覆盖后端模块代码***********"
echo $server_branch_cover
if [ -n "$server_branch_cover" ]; then
		cd ./components/server/src
		git fetch -p
		git switch $server_branch_cover
		git pull
		git log -1 --oneline
		cd ../../../
fi

date
echo "*************删除旧包***********"
sudo rm -rf build/install/
sudo rm -rf build/archive/
#sudo rm -rf build/build/
#sudo find build/build/protocols -name "*.html" -delete

date
echo "*************编译***********"
PACKAGE_ARGS=""
if $enable_protocol_network;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-network"
fi
if $enable_protocol_bt;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-bt"
fi
if $enable_protocol_ble;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-ble"
fi
if $enable_protocol_ipv4;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-ipv4"
fi
if $enable_protocol_ipv6;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-ipv6"
fi
if $enable_protocol_custom;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-custom"
fi
if $enable_protocol_auto;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-auto"
fi
if $enable_protocol_ics;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-ics"
fi
if $enable_protocol_file;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-file"
fi
if $enable_protocol_wifi;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package protocol-wifi"
fi
if $enable_monitors;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package monitors"
fi
if $enable_wfuzz_protocol;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package wfuzz-protocol"
fi
if $enable_wfuzz_protocol_shell;then
	PACKAGE_ARGS="$PACKAGE_ARGS --package wfuzz-protocol-shell"
fi

if [ -n "$JOBS" ];then
	PACKAGE_ARGS="$PACKAGE_ARGS --jobs $JOBS"
fi

if [ -n "$MEMORY" ];then
    PACKAGE_ARGS="$PACKAGE_ARGS --memory $MEMORY"
fi

if [ -n "$BLACK_MODULE" ];then
    array=(${BLACK_MODULE//,/ })
    for m in ${array[@]}; do
    	PACKAGE_ARGS="$PACKAGE_ARGS --exclude $m"
    done
fi

if [ -n "$WHITE_MODULE" ];then
    array=(${WHITE_MODULE//,/ })
    for m in ${array[@]}; do
    	PACKAGE_ARGS="$PACKAGE_ARGS --module $m"
    done
fi

./build-in-docker.sh --$build_type --noshell -DCOMPONENT_PYTHON3_PYPI_MIRROR=https://mirrors.aliyun.com/pypi/simple/  --base -m ftp

if $archive_packages;then
	./build-in-docker.sh --publish-packages
fi
if $archive_desktop;then
	./build-in-docker.sh --publish-desktop
fi
cd ./build/archive
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
cd ../../
cd $WORKSPACE