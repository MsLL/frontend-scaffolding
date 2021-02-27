前端脚手架或项目模板。

# prerequired

ubuntu18.0

## node

1.下载二进制包，当前是[v14.16.0](https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz)

2.解压到`~/work_tools`目录

3.vim ~/.zshrc

```shell
alias node='/home/upup/work_tools/node-v14.16.0-linux-x64/bin/node'
```

4.source  ~/.zshrc &&node -v

## yarn

1.vim ~/.zshrc，把node bin目录写到path变量。否则后面yarn可能报类似node not found

```shell
export NODE_HOME=/home/upup/work_tools/node-v14.16.0-linux-x64
export PATH=$NODE_HOME/bin:$PATH
```

2.安装yarn

```yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

yarn --version

这里是1.22.5