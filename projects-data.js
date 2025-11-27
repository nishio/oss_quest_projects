const projectsData = [
  // Open Source Projects
  {
    "title": "Optuna",
    "category": "Open Source",
    "one_liner": "機械学習のハイパーパラメータ最適化フレームワーク。",
    "description": "Python中心に使える最適化ツールで、Sampler/Prunerなど拡張点が明確。実験管理や分散実行の実装例が豊富で、研究から実運用まで幅広く利用されている。",
    "why_japan": "Preferred Networksが開発した日本発のハイパーパラメータ最適化フレームワーク。PFNの研究者チーム（秋葉拓哉ら）主導でOSSとして公開され、国内外の機械学習実務で広く利用されている。",
    "links": {
      "homepage": "https://optuna.org",
      "github": "https://github.com/optuna/optuna",
      "docs": "https://optuna.readthedocs.io/"
    }
  },
  {
    "title": "Misskey",
    "category": "Open Source",
    "one_liner": "日本発のActivityPub対応分散SNS。",
    "description": "リアクションや豊富なカスタマイズ性を備えたFediverseクライアント/サーバ。国内外で多数のインスタンスが稼働し、拡張エコシステムも活発。",
    "why_japan": "日本人開発者syuilo（篠田英司）が2014年に日本で開発を開始したActivityPub対応分散SNS。日本語圏のFediverse文化を牽引し、日本コミュニティ主導で活発に開発が続く。",
    "links": {
      "homepage": "https://misskey-hub.net/ja/",
      "github": "https://github.com/misskey-dev/misskey",
      "docs": "https://misskey-hub.net/ja/docs/"
    }
  },
  {
    "title": "Fluentd",
    "category": "Open Source",
    "one_liner": "ログ収集・ルーティングのデファクトOSS。",
    "description": "プラグインであらゆる入力/出力に対応するデータコレクタ。クラウド/オンプレを問わず、サーバ観測やデータ基盤の中核として採用されている。",
    "why_japan": "Treasure Data創業メンバー古橋貞之が中心となって開発した日本発のログ収集基盤OSS。国内企業や自治体システムでも採用され、日本語ドキュメントやコミュニティが充実している。",
    "links": {
      "homepage": "https://www.fluentd.org/",
      "github": "https://github.com/fluent/fluentd",
      "docs": "https://docs.fluentd.org/"
    }
  },
  {
    "title": "Ruby",
    "category": "Open Source",
    "one_liner": "日本発の汎用プログラミング言語。",
    "description": "『書いていて楽しい』を重視した動的言語。Railsをはじめ豊富なライブラリ群とコミュニティに支えられ、Webやスクリプト自動化で広く使われる。",
    "why_japan": "まつもとゆきひろが「書いていて楽しい」を理念に日本で設計したオブジェクト指向スクリプト言語。Railsなどを通じ世界中で利用される一方、日本のWebサービスや教育現場でも広く使われている。",
    "links": {
      "homepage": "https://www.ruby-lang.org/ja/",
      "github": "https://github.com/ruby/ruby",
      "docs": "https://docs.ruby-lang.org/ja/"
    }
  },
  {
    "title": "mruby",
    "category": "Open Source",
    "one_liner": "組込み向けの軽量Ruby実装。",
    "description": "小さなフットプリントでRubyの楽しさをそのままに、IoT/家電/ゲーム等の組込み用途で利用可能。C/C++と併用しやすい構成が特徴。",
    "why_japan": "Rubyの作者まつもとゆきひろが組み込み用途向けに設計した軽量Ruby実装。多くの日本企業・自治体システムの組み込みスクリプトとして採用され、日本のIoT文脈で活用されている。",
    "links": {
      "github": "https://github.com/mruby/mruby"
    }
  },
  {
    "title": "CuPy",
    "category": "Open Source",
    "one_liner": "NumPy/SciPy互換のGPU配列ライブラリ。",
    "description": "CUDA/ROCm上でNumPy APIライクにGPU計算を実行。多くの科学技術計算やMLで高速化の置き換え先として利用される。",
    "why_japan": "Preferred NetworksがChainerのGPUバックエンドとして開発した日本発のGPU配列計算ライブラリ。現在はNumPy互換の汎用CUDA／ROCm配列ライブラリとして独立し、国内研究機関でも標準的に利用される。",
    "links": {
      "homepage": "https://cupy.dev/",
      "github": "https://github.com/cupy/cupy",
      "docs": "https://docs.cupy.dev/"
    }
  },
  {
    "title": "Chainer",
    "category": "Open Source",
    "one_liner": "Define-by-Runの先駆的DLフレームワーク。",
    "description": "研究用途で広く使われた歴史的プロジェクト。現在はメンテナンス中心だが、Define-by-Run思想は多くの後続フレームワークに影響を与えた。",
    "why_japan": "Preferred Networksが日本で開発したPython製ディープラーニングフレームワーク。define-by-run方式を早期に実装し、日本の研究機関・企業の深層学習研究で広く使われた歴史的OSS。",
    "links": {
      "homepage": "https://chainer.org/",
      "github": "https://github.com/chainer/chainer"
    }
  },
  {
    "title": "NNabla",
    "category": "Open Source",
    "one_liner": "Sony製のディープラーニングフレームワーク。",
    "description": "学習・推論・モデル変換ツールを含むエコシステムを提供。組込みやオンデバイス推論も視野に、実運用での活用事例がある。",
    "why_japan": "ソニーグループが開発するNeural Network Libraries（nnabla）は、日本企業発のディープラーニングフレームワーク。Neural Network Consoleや組込みボードSpresenseと連携し、日本の産業応用で使われている。",
    "links": {
      "homepage": "https://nnabla.org/",
      "github": "https://github.com/sony/nnabla",
      "docs": "https://nnabla.readthedocs.io/"
    }
  },
  {
    "title": "MeCab",
    "category": "Open Source",
    "one_liner": "日本語形態素解析の定番ツール。",
    "description": "辞書を差し替えて多様な用途に対応。テキスト前処理の基盤として長年利用され、学術・産業の双方で実績がある。",
    "why_japan": "京都大学大学院情報学研究科とNTTコミュニケーション科学基礎研究所の共同研究として開発された日本語形態素解析エンジン。日本語NLP研究や商用システムで事実上の標準ツールとなっている。",
    "links": {
      "homepage": "https://taku910.github.io/mecab/",
      "github": "https://github.com/taku910/mecab"
    }
  },
  {
    "title": "Sudachi",
    "category": "Open Source",
    "one_liner": "業務志向の日本語形態素解析器と派生実装群。",
    "description": "本体（Java）に加え、Python版（SudachiPy）やRust版（Sudachi.rs）など派生が存在。品詞体系と辞書設計が実務で扱いやすい。",
    "why_japan": "ワークスアプリケーションズ徳島AI・NLP研究所が中心となり開発した日本語形態素解析器。日本語の単語境界や表記揺れの問題に対応し、ElasticsearchやGiNZAなど日本語向けOSSの基盤として使われる。",
    "links": {
      "github": "https://github.com/WorksApplications/Sudachi"
    }
  },
  {
    "title": "SentencePiece",
    "category": "Open Source",
    "one_liner": "言語非依存のサブワード分割ツール。",
    "description": "BPE/Unigram等のアルゴリズムを提供し、多言語の前処理を統一。大規模言語モデルのトークナイズに広く使われる。",
    "why_japan": "工藤拓（日本出身研究者）がGoogleで開発したサブワード分割ライブラリ。英日翻訳実験を含む論文とともに公開され、日本語を含む多言語NMT・日本語LLMのトークナイザとして広く利用されている。",
    "links": {
      "github": "https://github.com/google/sentencepiece"
    }
  },
  {
    "title": "GiNZA",
    "category": "Open Source",
    "one_liner": "spaCyベースの日本語NLPモデル群。",
    "description": "日本語の形態素解析・依存解析・固有表現抽出を高精度で提供。シンプルなAPIでプロトタイピングから実装まで扱いやすい。",
    "why_japan": "リクルートと国立国語研究所の共同研究から生まれた日本語NLPライブラリ。spaCy上で動作する日本語解析モデルを提供し、日本語形態素解析・構文解析・固有表現抽出のOSSとして国内で広く使われている。",
    "links": {
      "homepage": "https://megagonlabs.github.io/ginza/",
      "github": "https://github.com/megagonlabs/ginza"
    }
  },
  {
    "title": "Mozc",
    "category": "Open Source",
    "one_liner": "Google日本語入力のOSS版。",
    "description": "変換エンジンや辞書を含む日本語入力システム。クロスプラットフォームに対応し、派生プロジェクトも多数。",
    "why_japan": "Google日本語入力をオープンソース化した日本語IMEプロジェクト。Google Japanのエンジニアが中心となって開発し、Linuxを中心に日本語入力基盤として広く利用されている。",
    "links": {
      "github": "https://github.com/google/mozc"
    }
  },
  {
    "title": "Embulk",
    "category": "Open Source",
    "one_liner": "プラグイン式のバルクデータローダ。",
    "description": "YAMLで定義し、各種DB/ストレージ間のデータ移送を自動化。ジョブの再実行やリトライに強く、ETLの土台として使いやすい。",
    "why_japan": "Treasure Data共同創業者の古橋貞之が開発したOSSバルクデータローダー。日本企業のデータ基盤で広く使われ、Fluentdと組み合わせて日本語環境のETL／ログ基盤を支える。",
    "links": {
      "homepage": "https://www.embulk.org/",
      "github": "https://github.com/embulk/embulk",
      "docs": "https://www.embulk.org/docs/"
    }
  },
  {
    "title": "Digdag",
    "category": "Open Source",
    "one_liner": "シンプルな記法で書けるワークフローエンジン。",
    "description": "YAML中心の記述でジョブをスケジューリング。Airflow等とも相互補完的に使われ、クラウド連携の事例が多い。",
    "why_japan": "Treasure Dataが開発したワークフローエンジンで、Embulkなどと連携してデータパイプラインを記述する日本発OSS。日本企業のデータ分析基盤やクラウドサービスの運用で活用されている。",
    "links": {
      "homepage": "https://www.digdag.io/",
      "github": "https://github.com/treasure-data/digdag",
      "docs": "https://docs.digdag.io/"
    }
  },
  {
    "title": "Apache Hivemall",
    "category": "Open Source",
    "one_liner": "SQLで機械学習を実現する拡張ライブラリ。",
    "description": "HiveやSpark上でのMLアルゴリズムを提供。ETLとMLを同じ土台で扱いたいケースに向く。",
    "why_japan": "Treasure Dataの油井誠ら日本人エンジニアが開発した機械学習ライブラリで、Apache HivemallとしてASFトップレベルプロジェクト化された日本発OSS。日本企業のビッグデータ分析で利用されている。",
    "links": {
      "homepage": "https://hivemall.incubator.apache.org/",
      "github": "https://github.com/apache/incubator-hivemall"
    }
  },
  {
    "title": "Julius",
    "category": "Open Source",
    "one_liner": "日本発の大語彙連続音声認識エンジン。",
    "description": "オンデバイスでも動作する軽量性と拡張性が特徴。研究用途から実装まで幅広く使われる。",
    "why_japan": "京都大学河原研究室を中心に開発された大語彙連続音声認識エンジン。日本語音声認識研究用に始まり、IPA日本語ディクテーションキットなど国産プロジェクトの中核として長年利用されている。",
    "links": {
      "homepage": "https://julius.osdn.jp/",
      "github": "https://github.com/julius-speech/julius"
    }
  },
  {
    "title": "OpenToonz",
    "category": "Open Source",
    "one_liner": "2Dアニメ制作ソフトをOSS化したプロジェクト。",
    "description": "商用利用も可能な高機能ツール。プラグインやスクリプト拡張でパイプラインに組み込みやすい。",
    "why_japan": "イタリア製Toonzをスタジオジブリが長年カスタマイズして使ってきた版を基に、ドワンゴがOSSとして公開した2Dアニメ制作ソフト。日本のアニメ制作現場のノウハウを反映したツールとして世界に提供されている。",
    "links": {
      "homepage": "https://opentoonz.github.io/e/",
      "github": "https://github.com/opentoonz/opentoonz"
    }
  },
  {
    "title": "VRM / UniVRM",
    "category": "Open Source",
    "one_liner": "日本発の3Dアバター規格とUnity実装。",
    "description": "顔出し不要のコミュニケーションやメタバース利用を想定。ボーン/表情等の仕様が整理され、モデル流通を促進する。",
    "why_japan": "日本発の3Dアバターファイル形式VRMを一般社団法人VRMコンソーシアムが策定し、Unity実装としてUniVRMをOSS公開。VTuber文化など日本発のアバター利用を支える標準として国際標準化も進められている。",
    "links": {
      "homepage": "https://vrm.dev/",
      "github": "https://github.com/vrm-c/UniVRM"
    }
  },
  {
    "title": "OpenSiv3D",
    "category": "Open Source",
    "one_liner": "C++で手早く作れるクリエイティブコーディング環境。",
    "description": "2D/3D描画、画像・音声処理、GUI、入力制御までワンストップ。教育からプロトタイプまで扱いやすい。",
    "why_japan": "日本人開発者・鈴木遼が開発するC++20対応のクリエイティブコーディングフレームワークSiv3DのOSS版。日本語ドキュメントと国内コミュニティが充実し、教育やゲーム制作で広く使われている。",
    "links": {
      "homepage": "https://siv3d.github.io/ja-jp/",
      "github": "https://github.com/Siv3D/OpenSiv3D"
    }
  },
  {
    "title": "waifu2x",
    "category": "Open Source",
    "one_liner": "アニメ調画像向けの深層学習超解像。",
    "description": "ノイズ除去と拡大を同時に行うモデルで人気に。Webサービスやローカルツールとして多くの派生がある。",
    "why_japan": "日本人開発者nagadomiによるアニメ画像向け超解像・ノイズ除去プログラム。日本発OSSとして世界的に利用され、多数の派生実装やWindows向けGUI版が日本コミュニティから生まれている。",
    "links": {
      "github": "https://github.com/nagadomi/waifu2x"
    }
  },
  {
    "title": "YaneuraOu",
    "category": "Open Source",
    "one_liner": "高性能な将棋エンジン。",
    "description": "探索と評価関数の最適化に注力した実装で、研究用の検証やGUIとの連携事例も多い。学習済み評価関数の公開がある。",
    "why_japan": "磯崎元洋（やねうらお）が開発したオープンソース将棋エンジンで、プロ棋士にも勝利した強豪ソフト。多くの将棋AIが本エンジンをベースに開発されており、日本のコンピュータ将棋研究の基盤となっている。",
    "links": {
      "github": "https://github.com/yaneurao/YaneuraOu"
    }
  },
  {
    "title": "OpenRTM-aist",
    "category": "Open Source",
    "one_liner": "ロボット向けRTミドルウェア。",
    "description": "コンポーネントを組み合わせてロボットシステムを構築。研究と産業の橋渡しを目指す日本発の基盤。",
    "why_japan": "産業技術総合研究所が開発したRTミドルウェア実装で、OMG RTC仕様に準拠した世界初の実装。日本政府プロジェクトの支援を受けつつロボット開発に用いられ、国内外の研究機関で利用されている。",
    "links": {
      "homepage": "https://openrtm.org/",
      "github": "https://github.com/OpenRTM"
    }
  },
  {
    "title": "Open JTalk",
    "category": "Open Source",
    "one_liner": "日本語テキスト音声合成（TTS）システム。",
    "description": "辞書・音響モデル・フロントエンドを備え、研究や読み上げ用途で広く使われる。各言語バインディングも豊富。",
    "why_japan": "名古屋工業大学のグループが開発した日本語HMM音声合成システム。日本語テキストから自然な音声を生成するOSSとして研究・教育・読み上げツールなど日本語音声アプリの基盤となっている。",
    "links": {
      "homepage": "http://open-jtalk.sourceforge.net/",
      "github": "https://github.com/r9y9/open_jtalk"
    }
  },
  {
    "title": "VOICEVOX",
    "category": "Open Source",
    "one_liner": "手軽に使える日本語TTSエンジンと音声ライブラリ。",
    "description": "複数のキャラクターボイスを備え、GUI/CLI/HTTPで扱える。研究・創作・実況など幅広い用途で活用が進む。",
    "why_japan": "日本発の無料テキスト読み上げ・歌声合成ソフトで、OSS版エンジンと製品版をGitHubで公開。商用利用可能な日本語TTSとして多くのクリエイターや自治体が採用し、日本語音声合成コミュニティを活性化している。",
    "links": {
      "homepage": "https://voicevox.hiroshiba.jp/",
      "github": "https://github.com/VOICEVOX/voicevox_engine"
    }
  },
  {
    "title": "CKAN",
    "category": "Open Source",
    "one_liner": "世界で広く使われるデータカタログOSS。",
    "description": "データ登録・検索・API提供を一体化。多くの政府/自治体ポータルの基盤として採用されている。",
    "why_japan": "イギリス発OSSだが、日本政府のDATA.GO.JPやe-Govデータポータル、自治体のオープンデータカタログの基盤として広く採用。日本のオープンデータ基盤を支える中核ソフトとして位置づけられる。",
    "links": {
      "homepage": "https://ckan.org/",
      "github": "https://github.com/ckan/ckan",
      "docs": "https://docs.ckan.org/"
    }
  },
  {
    "title": "Jibungoto Planet",
    "category": "Open Source",
    "one_liner": "個人のカーボンフットプリント可視化アプリ。",
    "description": "NIESとCode for Japanが推進するOSS。行動変容を促すUIとデータ更新の仕組みを持つ。",
    "why_japan": "Code for Japanと国立環境研究所が共同開発したカーボンフットプリント可視化Webアプリ。日本の生活データと独自アルゴリズムをOSSとして公開し、日本の脱炭素ライフスタイル推進に活用されている。",
    "links": {
      "github": "https://github.com/codeforjapan/jibungoto-planet"
    }
  },
  {
    "title": "Jenkins",
    "category": "Open Source",
    "one_liner": "継続的インテグレーション（CI）のデファクトスタンダード。",
    "description": "ビルド・テスト・デプロイを自動化するCI/CDサーバ。豊富なプラグインエコシステムと柔軟なパイプライン記述により、あらゆる開発フローに対応。世界中で広く使われている。",
    "why_japan": "日本人開発者の川口耕介がSun在籍時にHudsonとして開発を始め、後にJenkinsとしてコミュニティ主導のCIサーバに発展。日本Jenkinsユーザ会やJenkinsユーザ・カンファレンス東京など強い国内コミュニティが継続的に支えている。",
    "links": {
      "homepage": "https://www.jenkins.io/",
      "github": "https://github.com/jenkinsci/jenkins",
      "docs": "https://www.jenkins.io/doc/"
    }
  },

  // Open Data Projects
  {
    "title": "政府オープンデータ（data.go.jp）",
    "category": "Open Data",
    "one_liner": "日本政府のオープンデータ・ポータル。",
    "description": "各府省庁や自治体のデータセットを横断検索。APIやメタデータ整備が進み、再利用の基盤となっている。",
    "why_japan": "日本政府が各府省のデータを集約して公開する公式オープンデータカタログ。CKANベースのOSS基盤上で運用され、日本のオープンデータ政策の中心として多くの再利用事例を生んでいる。",
    "links": {
      "homepage": "https://www.data.go.jp/"
    }
  },
  {
    "title": "自治体標準オープンデータセット",
    "category": "Open Data",
    "one_liner": "自治体向けに項目や形式を標準化したテンプレ群。",
    "description": "バス停、避難所、AED等の代表的データに標準仕様を提示。地域間の互換性と再利用性を高める取り組み。",
    "why_japan": "デジタル庁が策定した自治体向け標準データ仕様群。公共施設一覧や人口などの形式を統一し、日本全国の自治体オープンデータを機械処理しやすくすることで、横断的な利活用を促進している。",
    "links": {
      "homepage": "https://www.digital.go.jp/policies/opendata/"
    }
  },
  {
    "title": "地方公共団体向けオープンデータパッケージ",
    "category": "Open Data",
    "one_liner": "自治体がすぐ始められるオープンデータ配布物。",
    "description": "カタログ/サイト/ダッシュボードの雛形を含む。運用手順やチェックリストと併せて導入を支援する。",
    "why_japan": "内閣官房IT総合戦略室がGitHubで公開した自治体向けOSSパッケージ。CKANベースのオープンデータカタログとダッシュボードを一括導入可能にし、日本の地方公共団体のオープンデータ公開を後押ししている。",
    "links": {
      "homepage": "https://www.code4japan.org/"
    }
  },
  {
    "title": "e-Gov法令API v2",
    "category": "Open Data",
    "one_liner": "日本の法令データを機械可読で取得するAPI。",
    "description": "法令本文や改正履歴の取得を想定したエンドポイントを提供。時点指定や差分利用などのユースケースに対応する。",
    "why_japan": "デジタル庁が提供する日本の法令データAPIで、e-Gov法令検索のデータを機械可読に提供。特定時点の条文取得などが可能で、日本のリーガルテックや行政DXに不可欠なオープンAPI基盤となっている。",
    "links": {
      "homepage": "https://elaws.e-gov.go.jp/"
    }
  },
  {
    "title": "国会・府省会議 議事録メタデータ（NISTEP）",
    "category": "Open Data",
    "one_liner": "政府会議等の議事録メタデータを整理・公開。",
    "description": "横断検索やリンクトデータ化を見据えた取り組み。研究・報道・政策分析の基盤として活用される。",
    "why_japan": "文科省所管のNISTEPが公表した国会会議録・府省審議会議事録のメタデータセット。約4万5千件の議事録URL等をGitHubで公開し、日本の議会・行政プロセスの研究や透明性向上に貢献している。",
    "links": {
      "homepage": "https://www.nistep.go.jp/",
      "github": "https://github.com/nistep"
    }
  },
  {
    "title": "SmartNews 国会議案データ",
    "category": "Open Data",
    "one_liner": "国会提出法案のデータ整備と公開。",
    "description": "議案情報を機械可読に整理し、市民や研究者の二次利用を支援。可視化や検索のベースとして活用可能。",
    "why_japan": "スマートニュース メディア研究所が衆参両院サイトから収集し、約2万件の国会議案データをGitHubでオープンデータ化。日本の立法動向を分析可能にし、報道機関や研究者の調査を支援している。",
    "links": {
      "github": "https://github.com/smartnews-politics"
    }
  },
  {
    "title": "GSI Maps（地理院地図）",
    "category": "Open Data",
    "one_liner": "国土地理院の地図タイル・ツール群の公開。",
    "description": "多様な地理レイヤを提供し、災害情報から登山計画まで幅広く活用。開発者向けAPIやサンプルも整備されている。",
    "why_japan": "国土地理院が提供するウェブ地図サービスで、地理院タイルや地図データをオンラインで無料公開。GitHub上のgsimapsリポジトリとしてOSS開発も行われ、日本の地理オープンデータの中心となっている。",
    "links": {
      "homepage": "https://maps.gsi.go.jp/",
      "github": "https://github.com/gsi-cyberjapan",
      "docs": "https://maps.gsi.go.jp/development/"
    }
  },
  {
    "title": "GTFS-JP",
    "category": "Open Data",
    "one_liner": "日本向けに拡張された公共交通データ標準。",
    "description": "運行時刻や停留所等を共通フォーマット化。事業者・自治体・アプリ開発者のデータ連携を促す。",
    "why_japan": "国土交通省などが策定した、日本のバス・鉄道向けGTFS拡張仕様。agency_jp.txtなど日本独自項目を定め、全国の公共交通オープンデータを国際仕様と両立させつつ日本語・行政手続きに対応させている。",
    "links": {
      "homepage": "https://www.gtfs.jp/"
    }
  },
  {
    "title": "TokyoGTFS",
    "category": "Open Data",
    "one_liner": "首都圏の公共交通GTFS整備・生成の試み。",
    "description": "鉄道・バス事業者のデータを収集し、GTFS作成/更新の自動化を目指すツール群。地域横展開の参考事例。",
    "why_japan": "海外開発者が東京の鉄道・バス情報を集約して作成したGTFSデータ生成OSS。東京の公共交通オープンデータを扱う実験的プロジェクトとして、日本のGTFS-JP普及初期の事例として参照されている。",
    "links": {
      "github": "https://github.com/MKuranowski/TokyoGTFS"
    }
  },
  {
    "title": "Safecast",
    "category": "Open Data",
    "one_liner": "市民科学による環境センサデータの継続公開。",
    "description": "放射線を中心に、誰もが測定・共有・可視化できる仕組みを提供。CC0等のライセンスで二次利用を推進する。",
    "why_japan": "2011年の福島第一原発事故を契機に日本で始まった市民放射線計測プロジェクト。bGeigieなど自作センサーで日本各地の線量を測定し、世界最大級の放射線オープンデータセットとして公開している。",
    "links": {
      "homepage": "https://safecast.org/",
      "github": "https://github.com/safecast"
    }
  },
  {
    "title": "Where Does My Money Go?（spending.jp）",
    "category": "Open Data",
    "one_liner": "税金の使途を市民に分かりやすく可視化。",
    "description": "自治体ごとに再利用できるテンプレートを配布。オープンデータと結びつけて公共支出の透明性を高める。",
    "why_japan": "Code for Japanらが英国のWDMMGを日本向けにローカライズしたOSSで、住民1人1日あたりの税金の使途を可視化。つくば市など多数の自治体に展開され、日本のオープンガバメント運動の象徴的プロジェクトとなった。",
    "links": {
      "homepage": "https://spending.jp/",
      "github": "https://github.com/codeforjapan/spending.jp"
    }
  },
  {
    "title": "Polimoney（ポリマネー）",
    "category": "Open Data",
    "one_liner": "政治資金の流れを市民に分かりやすく可視化するダッシュボード（OSS）。",
    "description": "政治資金収支報告書や会計データをもとに、収入・支出・残高をグラフや明細で公開する。OCRや型定義の整備、データ構造の厳密化を進め、透明性向上と報告作成の省力化を目指す。デモ実装を公開中。",
    "why_japan": "デジタル民主主義2030プロジェクトが開発するOSSで、政治資金収支報告書データを可視化し日本の政治資金フローを市民に分かりやすく提示。GitHubで公開され、政治資金データベースと連携した分析に使われている。",
    "links": {
      "homepage": "https://polimoney.dd2030.org/",
      "github": "https://github.com/digitaldemocracy2030/polimoney",
      "docs": "https://dd2030.org/history/week11_20250528/polimoney"
    }
  },

  // Open Government Projects
  {
    "title": "Decidim Japan",
    "category": "Open Government",
    "one_liner": "参加型民主主義プラットフォームの日本展開。",
    "description": "住民提案・投票・フォーラム等を備えるCivicTech基盤。国内での導入検討と日本語化・運用知見が蓄積されている。",
    "why_japan": "スペイン発DecidimをCode for Japanが日本向けにカスタマイズした日本版実装。中央省庁・自治体・大学など30以上の組織で実証利用され、日本における参加型民主主義プラットフォームとして定着しつつある。",
    "links": {
      "homepage": "https://www.code4japan.org/",
      "github": "https://github.com/decidim/decidim",
      "docs": "https://docs.decidim.org/"
    }
  },
  {
    "title": "FixMyStreet Japan",
    "category": "Open Government",
    "one_liner": "道路損傷など市民の通報を行政につなぐ仕組み。",
    "description": "mySocietyのOSSをベースに日本向けに展開。Open311等の標準と連携し、課題の可視化と対応を促す。",
    "why_japan": "英国発FixMyStreetをベースにCode for Japanらが日本向けに運営する通報プラットフォーム。道路の破損や街灯故障など地域課題をスマホから自治体へ届ける仕組みとして、日本各地の実証で活用されている。",
    "links": {
      "homepage": "https://fixmystreet.jp/",
      "github": "https://github.com/mysociety/fixmystreet"
    }
  },
  {
    "title": "東京都 新型コロナ対策サイト",
    "category": "Open Government",
    "one_liner": "自治体OSSの成功例となったCOVID-19情報サイト。",
    "description": "Nuxt/Vueで構築され、多数の自治体にフォーク展開。翻訳/アクセシビリティ/データ更新の仕組みが洗練されている。",
    "why_japan": "東京都がCode for Japanに委託して1週間で構築したOSSの感染症対策ダッシュボード。GitHubで公開され、道府県や海外自治体が派生サイトを多数立ち上げた、日本発オープンソース行政の象徴的事例。",
    "links": {
      "homepage": "https://stopcovid19.metro.tokyo.lg.jp/",
      "github": "https://github.com/tokyo-metropolitan-gov/covid19"
    }
  },
  {
    "title": "sinsai.info",
    "category": "Open Government",
    "one_liner": "2011年の震災時に市民が情報集約した危機マッピング。",
    "description": "Ushahidi基盤で被害報告を集約・可視化。オープンデータと市民協働の先行事例となった。",
    "why_japan": "2011年東日本大震災発生直後にOSM Foundation Japanらが立ち上げた危機情報共有サイト。UshahidiとOpenStreetMapを用いて被災情報を集約し、日本の災害時オープンデータ／ボランティアGISの先駆けとなった。",
    "links": {
      "homepage": "http://sinsai.info/"
    }
  },
  {
    "title": "広聴AI（Kouchou-AI）",
    "category": "Open Government",
    "one_liner": "ブロードリスニングの意見収集・可視化・分析を行うオープンソース基盤。",
    "description": "多様なテキスト意見を取り込み、LLMで要約・分類し、ダッシュボードで可視化する。コミュニティで継続開発され、ローカルLLM対応（v3系）によりAPI費用なしの運用も視野に入る。自治体・政党・市民団体の実証での活用を想定。",
    "why_japan": "デジタル民主主義2030が開発するブロードリスニングOSSで、Talk to the Cityを日本の選挙・自治体実務向けに改良。都知事選や2050東京戦略、宇多津町総合計画などで市民の声の可視化に実利用されている。",
    "links": {
      "homepage": "https://dd2030.org/kouchou-ai",
      "github": "https://github.com/digitaldemocracy2030/kouchou-ai",
      "docs": "https://www.docswell.com/s/tokoroten/ZL1M88-2025-06-14-014546"
    }
  },
  {
    "title": "いどばた（Idobata）",
    "category": "Open Government",
    "one_liner": "日本版の大規模熟議・政策共創を支えるプラットフォーム。",
    "description": "市民や専門家がオンラインで政策案を熟議し、提言へ落とし込むためのOSS群。意見収集、掲示板での議論（例：Discourse）、GitHubでの原案管理、MkDocs等での公開というワークフローを重視。都のAI戦略提言づくり等で運用例がある。",
    "why_japan": "デジタル民主主義2030が開発する大規模熟議プラットフォームで、台湾のvTaiwan/JOINを参考に日本向けに設計。チームみらいの「みらいいどばた会議」や東京都AI戦略いどばた会議で、市民の意見収集とAIによる論点整理に使われている。",
    "links": {
      "homepage": "https://dd2030.org/",
      "docs": "https://dd2030.org/history/week12_20250604/idobata"
    }
  },
  {
    "title": "PoliPoli Gov",
    "category": "Open Government",
    "one_liner": "自治体向け市民参加プラットフォーム。",
    "description": "政策提案、アンケート、パブコメ受付、審議会の意見募集などをクラウド上で管理。つくば市など複数の自治体で市民参加プロセスに導入。Decidimとの連携機能も提供し、議論から政策化までのサイクルを支援する。",
    "why_japan": "日本企業（PoliPoli株式会社）が開発・運営し、つくば市など国内自治体で実績がある。",
    "links": {
      "homepage": "https://polipoli.work/gov"
    }
  },
  {
    "title": "Liqlid",
    "category": "Open Government",
    "one_liner": "Liquid Democracy（委任型民主主義）を実現するデジタル参加ツール。",
    "description": "有権者が議題ごとに直接投票するか、信頼する誰かに投票を委任できる仕組み。Code for Japanが日本語化を進め、東京都武蔵野市で実証実験を実施。ドイツ発だが国内でのローカライズ・活用が進んでいる。",
    "why_japan": "Code for Japanが日本語化・導入支援を実施。武蔵野市での実証実験など国内事例あり。",
    "links": {
      "homepage": "https://liqd.net/en/",
      "github": "https://github.com/liqd"
    }
  },
  {
    "title": "my groove さんだ",
    "category": "Open Government",
    "one_liner": "兵庫県三田市の市民協働アプリ。",
    "description": "市民が地域の課題や提案を投稿し、行政や他市民とコミュニケーションできるプラットフォーム。三田市とCivicWave（Civictechスタートアップ）が開発。OSS化の検討が進められている。",
    "why_japan": "兵庫県三田市が主体となり、国内Civictechコミュニティと協働で開発。",
    "links": {
      "homepage": "https://mygroove.city.sanda.lg.jp/"
    }
  },
  {
    "title": "自治体議会会議録検索システム",
    "category": "Open Government",
    "one_liner": "多くの自治体で導入されている議会議事録の横断検索システム。",
    "description": "全国の自治体議会で採用される議事録検索基盤。発言者・日付・キーワードでの検索が可能。API提供やオープンデータ化も進み、議会の透明性向上に貢献。全国市議会議長会が推進している。",
    "why_japan": "全国市議会議長会が標準化・推進する日本の議会デジタル化の基盤。",
    "links": {
      "homepage": "https://www.si-gichokai.jp/"
    }
  },
  {
    "title": "My City Report",
    "category": "Open Government",
    "one_liner": "市民がスマホで公共施設の不具合を自治体に通報できるアプリ（OSS）。",
    "description": "千葉市が先駆的に導入し、道路の損傷、ゴミの不法投棄などを写真と位置情報で通報できる仕組み。オープンソース化され、複数の自治体に展開。CivicTechコミュニティとの協働で開発が進む。",
    "why_japan": "千葉市が主導してOSS化し、国内複数自治体に展開。Code for Japanとの協働例も多い。",
    "links": {
      "homepage": "https://www.city.chiba.jp/shimin/shimin/kohokocho/my-city-report.html",
      "github": "https://github.com/codeforjapan/mycityreport"
    }
  },
  {
    "title": "国土交通省道路通報システム",
    "category": "Open Government",
    "one_liner": "国民が道路の異常や損傷を通報できる国交省の公式システム。",
    "description": "全国の国道・高速道路の不具合を写真・位置情報付きで通報可能。通報内容は道路管理者に自動送信され、迅速な対応を促す。アプリ版とWeb版の両方で提供。",
    "why_japan": "国土交通省が運営する公式の市民通報システム。",
    "links": {
      "homepage": "https://www.mlit.go.jp/road/dia-info/tuuhou/"
    }
  },
  {
    "title": "RESAS（地域経済分析システム）",
    "category": "Open Government",
    "one_liner": "国と自治体が地域経済をデータで分析・可視化できる公的プラットフォーム。",
    "description": "人口動態、産業構造、観光、雇用などのビッグデータをダッシュボードで可視化。地方創生の政策立案をエビデンスベースで支援。API提供もあり、自治体や研究者が独自分析に活用できる。",
    "why_japan": "内閣府と経済産業省が主導する日本の地方創生データ基盤。",
    "links": {
      "homepage": "https://resas.go.jp/",
      "docs": "https://opendata.resas-portal.go.jp/"
    }
  },
  {
    "title": "Ishikawa \"Milli\"",
    "category": "Open Government",
    "one_liner": "石川県のデータ駆動型政策形成を支えるダッシュボード（実証プロジェクト）。",
    "description": "複数の公開データやセンサーデータを統合し、交通・防災・観光などの政策判断を可視化。Code for Kanazawaなどのコミュニティと協働で開発され、オープンデータとCivicTechの連携事例として注目された。",
    "why_japan": "石川県とCode for Kanazawaが協働で開発した地域データ可視化の先行事例。",
    "links": {
      "homepage": "https://www.pref.ishikawa.lg.jp/"
    }
  },
  {
    "title": "PLATEAU",
    "category": "Open Government",
    "one_liner": "国土交通省が推進する3D都市モデルの整備・公開プロジェクト。",
    "description": "全国の都市を3Dデータ化し、G空間情報として公開。都市計画、防災シミュレーション、スマートシティ実証に活用される。データはオープンデータとして提供され、民間の都市DX開発にも利用可能。",
    "why_japan": "国土交通省が主導する日本の3D都市データ基盤プロジェクト。",
    "links": {
      "homepage": "https://www.mlit.go.jp/plateau/",
      "github": "https://github.com/Project-PLATEAU"
    }
  },
  {
    "title": "xID",
    "category": "Open Government",
    "one_liner": "自治体の行政手続きをデジタルIDで簡素化するプラットフォーム。",
    "description": "マイナンバーカードやSMS認証を活用し、オンライン申請やログインを統合管理。複数の自治体（渋谷区、加賀市など）で導入され、窓口のDX化と市民の利便性向上を実現。民間事業者xIDが開発・提供。",
    "why_japan": "日本企業xIDが開発し、国内複数自治体で導入されている行政DX基盤。",
    "links": {
      "homepage": "https://xid.inc/"
    }
  },
  {
    "title": "mydoor OSAKA ID",
    "category": "Open Government",
    "one_liner": "大阪市のデジタル市民サービス統合プラットフォーム。",
    "description": "大阪市民向けのデジタルID基盤で、行政手続き、施設予約、イベント申込などを一元管理。マイナンバーカード連携やスマホ完結の手続きを推進し、市民の利便性とDX推進を両立。",
    "why_japan": "大阪市が主導するデジタル市民サービスの統合基盤。",
    "links": {
      "homepage": "https://mydoor.city.osaka.lg.jp/"
    }
  },
  {
    "title": "めぶくID",
    "category": "Open Government",
    "one_liner": "岐阜県関市のデジタルIDを活用した市民サービスプラットフォーム。",
    "description": "関市が導入したデジタルIDで、行政手続き、イベント参加、地域ポイント付与などを統合。地方都市でのデジタル市民参加と地域活性化のモデルケースとして注目されている。",
    "why_japan": "岐阜県関市が主導する地方自治体のデジタルID先行事例。",
    "links": {
      "homepage": "https://mebuku.city.seki.lg.jp/"
    }
  },
  {
    "title": "会津若松＋ID",
    "category": "Open Government",
    "one_liner": "会津若松市のスマートシティ基盤を支えるデジタルID。",
    "description": "会津若松市が推進するスマートシティプロジェクトのID基盤。行政サービス、地域ポイント、健康管理アプリなどを統合し、市民の生活と地域データを連携。先進的な地方DX事例として知られる。",
    "why_japan": "会津若松市が主導する日本のスマートシティ先行事例。",
    "links": {
      "homepage": "https://www.city.aizuwakamatsu.fukushima.jp/"
    }
  }
];
