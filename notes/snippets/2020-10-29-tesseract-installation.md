---
date: 2020-10-29
---

# Install Tesseract OCR on Mac

在 Mac 上安装 Tesseract 的踩坑记录。

<!-- more -->

## 资料

Tesseract 是一个开源的 OCR 引擎：

- Github: [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract)
- 文档：[tesseract-ocr.github.io/tessdoc](https://tesseract-ocr.github.io/tessdoc/)


## 安装

### 直接安装

文档给了[直接安装](https://tesseract-ocr.github.io/tessdoc/Home.html)和[编译源码](https://tesseract-ocr.github.io/tessdoc/Compiling.html)两种安装方式，在 Mac 上的确可以用 `brew` 来直接安装：

```bash
brew install tesseract
```

但这是在你只需要用现成的语言库，不需要自行训练的前提下。如果要用 Tesseract 来训练，那就要装 training tools，不然有的命令（如 `unicharset_extractor`）就没法用。

[这个回答](https://stackoverflow.com/questions/36304824/unicharset-extractor-command-not-found)说可以直接通过 `brew` 的 `--with-training-tools` 选项来装 training tools：

```bash
brew install --with-training-tools tesseract
```

但这是个四年前的回答，而 Tesseract 在两年前就移除了所有的选项（见 [Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core) 的 [pr#36293](https://github.com/Homebrew/homebrew-core/pull/36293) 和 [pr#31510](https://github.com/Homebrew/homebrew-core/pull/31510)）。那么就只能通过编译源码来安装。


### 编译源码

主要参考：

- [Compilation guide for various platforms](https://tesseract-ocr.github.io/tessdoc/Compiling.html#macos-with-homebrew)
- [How to use the tools provided to train Tesseract 4.00](https://tesseract-ocr.github.io/tessdoc/TrainingTesseract-4.00#on-macos-mojave-with-homebrew)

去[这里](https://github.com/tesseract-ocr/tesseract/releases/tag/4.1.1)下源码，然后安装一些依赖包：

```bash
brew install cairo pango icu4c autoconf libffi libarchive
```

如果缺了这些包，在安装 training tools 的时候就会报：

```bash
Need to reconfigure project, so there are no errors
```

然后按[文档](https://tesseract-ocr.github.io/tessdoc/Compiling.html#compile)来就行：

```bash
cd tesseract  # 下载的源码路径
./autogen.sh
mkdir build
cd build

# 配置环境变量
../configure PKG_CONFIG_PATH=/usr/local/opt/icu4c/lib/pkgconfig:/usr/local/opt/libarchive/lib/pkgconfig:/usr/local/opt/libffi/lib/pkgconfig
# 编译 Tesseract
make -j
# 安装 Tesseract
sudo make install

# 编译 training tools
make training
# 安装 training tools
sudo make training-install
```

当然配置环境变量那一步也可以按[这里](https://tesseract-ocr.github.io/tessdoc/TrainingTesseract-4.00#on-macos-mojave-with-homebrew)写的那样等价替换为：

```bash
export PKG_CONFIG_PATH=\
$(brew --prefix)/lib/pkgconfig:\
$(brew --prefix)/opt/libarchive/lib/pkgconfig:\
$(brew --prefix)/opt/icu4c/lib/pkgconfig:\
$(brew --prefix)/opt/libffi/lib/pkgconfig

../configure
```

### 环境变量

`TESSDATA_PREFIX` 是存放 Tesseract 训练好的语言数据的路径，它的默认值大概是 `/usr/local/share/tessdata`，不出意外地话这个路径在安装完 Tesseract 后就会出现。但如果你想换个路径，那就需要去配环境变量：

```bash
export TESSDATA_PREFIX=`your_path_to_tessdata_dir`
```

Shell 是 bash 就在 `~/.bash_profile` 里配，是 zsh 就在 `~/.zshrc` 里配。然后：

```bash
source ~/.bash_profile
# 或 
source ~/.zshrc
```

可以去[这里](https://github.com/tesseract-ocr/tessdata)下载已经训练好的语言数据，或者自己训练一些，总之得把语言数据（`*.traineddata`）放到路径 `TESSDATA_PREFIX` 下才能用。如果 Tesseract 在 `TESSDATA_PREFIX` 下找不到你要用的语言数据，或者 `TESSDATA_PREFIX` 这个路径不存在，都会报：

```bash
Please make sure the TESSDATA_PREFIX environment variable is set to your "tessdata" directory.
```
