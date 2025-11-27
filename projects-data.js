const projectsData = [
  // Open Source Projects
  {
    "title": "Optuna",
    "category": "Open Source",
    "one_liner": "機械学習のハイパーパラメータ最適化フレームワーク。",
    "description": "Python中心に使える最適化ツールで、Sampler/Prunerなど拡張点が明確。実験管理や分散実行の実装例が豊富で、研究から実運用まで幅広く利用されている。",
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/mruby/mruby"
    }
  },
  {
    "title": "CuPy",
    "category": "Open Source",
    "one_liner": "NumPy/SciPy互換のGPU配列ライブラリ。",
    "description": "CUDA/ROCm上でNumPy APIライクにGPU計算を実行。多くの科学技術計算やMLで高速化の置き換え先として利用される。",
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/WorksApplications/Sudachi"
    }
  },
  {
    "title": "SentencePiece",
    "category": "Open Source",
    "one_liner": "言語非依存のサブワード分割ツール。",
    "description": "BPE/Unigram等のアルゴリズムを提供し、多言語の前処理を統一。大規模言語モデルのトークナイズに広く使われる。",
    "why_japan": "",
    "links": {
      "github": "https://github.com/google/sentencepiece"
    }
  },
  {
    "title": "GiNZA",
    "category": "Open Source",
    "one_liner": "spaCyベースの日本語NLPモデル群。",
    "description": "日本語の形態素解析・依存解析・固有表現抽出を高精度で提供。シンプルなAPIでプロトタイピングから実装まで扱いやすい。",
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/google/mozc"
    }
  },
  {
    "title": "Embulk",
    "category": "Open Source",
    "one_liner": "プラグイン式のバルクデータローダ。",
    "description": "YAMLで定義し、各種DB/ストレージ間のデータ移送を自動化。ジョブの再実行やリトライに強く、ETLの土台として使いやすい。",
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/nagadomi/waifu2x"
    }
  },
  {
    "title": "YaneuraOu",
    "category": "Open Source",
    "one_liner": "高性能な将棋エンジン。",
    "description": "探索と評価関数の最適化に注力した実装で、研究用の検証やGUIとの連携事例も多い。学習済み評価関数の公開がある。",
    "why_japan": "",
    "links": {
      "github": "https://github.com/yaneurao/YaneuraOu"
    }
  },
  {
    "title": "OpenRTM-aist",
    "category": "Open Source",
    "one_liner": "ロボット向けRTミドルウェア。",
    "description": "コンポーネントを組み合わせてロボットシステムを構築。研究と産業の橋渡しを目指す日本発の基盤。",
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/codeforjapan/jibungoto-planet"
    }
  },

  // Open Data Projects
  {
    "title": "政府オープンデータ（data.go.jp）",
    "category": "Open Data",
    "one_liner": "日本政府のオープンデータ・ポータル。",
    "description": "各府省庁や自治体のデータセットを横断検索。APIやメタデータ整備が進み、再利用の基盤となっている。",
    "why_japan": "",
    "links": {
      "homepage": "https://www.data.go.jp/"
    }
  },
  {
    "title": "自治体標準オープンデータセット",
    "category": "Open Data",
    "one_liner": "自治体向けに項目や形式を標準化したテンプレ群。",
    "description": "バス停、避難所、AED等の代表的データに標準仕様を提示。地域間の互換性と再利用性を高める取り組み。",
    "why_japan": "",
    "links": {
      "homepage": "https://www.digital.go.jp/policies/opendata/"
    }
  },
  {
    "title": "地方公共団体向けオープンデータパッケージ",
    "category": "Open Data",
    "one_liner": "自治体がすぐ始められるオープンデータ配布物。",
    "description": "カタログ/サイト/ダッシュボードの雛形を含む。運用手順やチェックリストと併せて導入を支援する。",
    "why_japan": "",
    "links": {
      "homepage": "https://www.code4japan.org/"
    }
  },
  {
    "title": "e-Gov法令API v2",
    "category": "Open Data",
    "one_liner": "日本の法令データを機械可読で取得するAPI。",
    "description": "法令本文や改正履歴の取得を想定したエンドポイントを提供。時点指定や差分利用などのユースケースに対応する。",
    "why_japan": "",
    "links": {
      "homepage": "https://elaws.e-gov.go.jp/"
    }
  },
  {
    "title": "国会・府省会議 議事録メタデータ（NISTEP）",
    "category": "Open Data",
    "one_liner": "政府会議等の議事録メタデータを整理・公開。",
    "description": "横断検索やリンクトデータ化を見据えた取り組み。研究・報道・政策分析の基盤として活用される。",
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "github": "https://github.com/smartnews-politics"
    }
  },
  {
    "title": "GSI Maps（地理院地図）",
    "category": "Open Data",
    "one_liner": "国土地理院の地図タイル・ツール群の公開。",
    "description": "多様な地理レイヤを提供し、災害情報から登山計画まで幅広く活用。開発者向けAPIやサンプルも整備されている。",
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "homepage": "https://www.gtfs.jp/"
    }
  },
  {
    "title": "TokyoGTFS",
    "category": "Open Data",
    "one_liner": "首都圏の公共交通GTFS整備・生成の試み。",
    "description": "鉄道・バス事業者のデータを収集し、GTFS作成/更新の自動化を目指すツール群。地域横展開の参考事例。",
    "why_japan": "",
    "links": {
      "github": "https://github.com/MKuranowski/TokyoGTFS"
    }
  },
  {
    "title": "Safecast",
    "category": "Open Data",
    "one_liner": "市民科学による環境センサデータの継続公開。",
    "description": "放射線を中心に、誰もが測定・共有・可視化できる仕組みを提供。CC0等のライセンスで二次利用を推進する。",
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "homepage": "http://sinsai.info/"
    }
  },
  {
    "title": "広聴AI（Kouchou-AI）",
    "category": "Open Government",
    "one_liner": "ブロードリスニングの意見収集・可視化・分析を行うオープンソース基盤。",
    "description": "多様なテキスト意見を取り込み、LLMで要約・分類し、ダッシュボードで可視化する。コミュニティで継続開発され、ローカルLLM対応（v3系）によりAPI費用なしの運用も視野に入る。自治体・政党・市民団体の実証での活用を想定。",
    "why_japan": "",
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
    "why_japan": "",
    "links": {
      "homepage": "https://dd2030.org/",
      "docs": "https://dd2030.org/history/week12_20250604/idobata"
    }
  }
];
