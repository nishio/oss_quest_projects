# 台湾Open StarTer Villageのデータ構造分析

## データ構造

台湾版は**ボードゲーム**として設計されており、プロジェクトカードは以下の構造：

```json
{
  "name": "プロジェクト名",
  "type": "カテゴリ（開放政府/開放資料/開放原始碼）",
  "description": "簡潔な説明文",
  "jobs": ["必要な役割のリスト"],
  "requirements": {
    "役割名": ポイント数
  }
}
```

## カテゴリ分類（3種類）

1. **開放政府（Open Government）** - 10プロジェクト
   - 台灣成功加入 OGP 組織
   - V 歹丸（vTaiwan）
   - 政治獻金透明化修法
   - 實價登錄到門牌
   - 民意代表投票指南
   - 公共政策網路參與平臺
   - 政府資料開放平台
   - 國民法官
   - 開放國會直播
   - 資料申請小精靈

2. **開放資料（Open Data）** - 10プロジェクト
   - 在專制國家推動開放資料專法
   - Open Street Guide（OpenStreetMap）
   - 嗶了再買
   - ㄅㄧㄤˋ典（辞書）
   - 全民追公車
   - 真假！？別再傳謠言（ファクトチェック）
   - 口罩藏寶圖 口罩在哪裡（COVID-19対応）
   - 開放館藏
   - 就職順風耳
   - 國家祕寶

3. **開放原始碼（Open Source）** - 10プロジェクト
   - Linux kerkernel
   - Firebox（Firefox）
   - BiangOffice.org（LibreOffice）
   - Public Money Public Code
   - Inksgap（Inkscape）
   - 製作開源農業感測器
   - 了解開源授權
   - AllPass
   - 酷音未來輸入法
   - OCF Lab

## 特徴

### ゲーム要素
- **jobs配列**: プロジェクトを完成させるのに必要な役割（行銷公關、法務、美術與設計、公務員、文字工作者、議題工作者、工程師）
- **requirements**: 各役割に必要なポイント数
- 合計30プロジェクト（各カテゴリ10個ずつ）

### 説明文の特徴
- 非常に簡潔（1行程度）
- プロジェクトの目的や効果を端的に表現
- 技術的詳細より「何のためのプロジェクトか」を重視

## 日本版への応用提案

### 違いを考慮すべき点

1. **ゲーム要素の有無**
   - 台湾版：ボードゲームなので`jobs`と`requirements`が必須
   - 日本版：カタログとして作るなら、これらは不要

2. **データ構造の提案**

```json
{
  "title": "プロジェクト名",
  "one_liner": "120文字以内の要約",
  "description": "詳細な説明（技術者・非技術者両方に分かりやすく）",
  "category": "Civic Tech / Open Data / Open Source など",
  "links": {
    "homepage": "https://...",
    "github": "https://github.com/...",
    "docs": "https://..."
  },
  "japanese_involvement": "日本との関わりの説明",
  "tags": ["タグ1", "タグ2"]
}
```

### 台湾版から学べること

1. **カテゴリの明確化**: 3つのカテゴリに整理されていて分かりやすい
2. **簡潔な説明**: descriptionが1行で本質を伝えている
3. **バランス**: 各カテゴリ同数でバランスが取れている
4. **実例の豊富さ**: 国際的プロジェクト（Linux、Firefox）と台湾固有プロジェクトを混在

### 日本版での差別化

- より詳細な技術情報（`description`フィールド）
- 貢献方法の明示（`contrib`フィールド）
- 日本人の関わりの明確化（`japanese_involvement`）
- リンクの充実（homepage、GitHub、docs）
