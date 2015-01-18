WagtsilIcom
====

d3.jsを使ってAndroidアプリのアイコンを作る。

動機
----

Androidアプリのアイコンをきれいにしたい。mspaintを使って描いたアイコンはジャギジャギで見るに耐えない。かつ、絵心のない自分には、フリーハンドで小奇麗な絵を描くのは厳しい。

ならば、プログラミングで絵を描いてしまえばいい。ベクターグラフィクス系ならばジャギジャギにならないきれいな絵を描けるはず。

ベクターグラフィクスにも色々あるが、手軽さからJavaScriptのSVGを選んだ。簡単にSVGできそうなJavaScriptのライブラリを探すとd3.jsが見つかった。d3.jsといえば、データビジュアライゼーションで注目されているライブラリ。試す価値はある。

作業手順
----

* d3.jsをダウンロードする(本家から直接ロードすることも可能)。
* htmlを書く。
* JavaScriptを書く。
* Firefox Developer Editionでhtmlを表示する。
* 開発ツールのインスペクタでノードツリーを表示して、SVGのツリーをコピーする。
* テキストエディタを開いてペーストする。
* テキストを保存する。拡張子は.svg。
* Inkscapeで保存したファイルを開く。
* 必要なサイズのビットマップにエクスポートする。拡張子は.png。
  * 480 xxhdpi
  * 320 xhdpi
  * 240 hdpi
  * 160 mdpi

d3.jsでSVGを描く
----

Wagtailのアイコンは、2つの半円がベースになる。半円を描くには、円弧の開始角度と終了角度で行うが、重要なのは終了角度のほう。終了角度が正数ならば時計回りに円弧が描かれ、負数ならば反時計回りに円弧が描かれる。

フォントを使う
----

htmlではWebフォントを使えるが、最終的にはInkscapeでビットマップにするので、Inkscapeで使えるフォント、つまりOSに入っているフォントを指定するしかない。それがイヤならブラウザの画面をキャプチャするしかない。
