var PLUGIN_INFO =
<KeySnailPlugin>
    <name>TabGroup ScreenLike</name>
    <name lang="ja">TabGruop ScreenLike</name>
    <description>you can use TabGroupManager like screen</description>
    <description lang="ja">タブグループマネージャをスクリーンのように使用することが出来ます。</description>
    <version>0.1</version>
    <updateURL></updateURL>
    <iconURL></iconURL>
    <author mail="shibayu36@gmail.com" homepage="http://d.hatena.ne.jp/shiba_yu36/">shiba_yu36</author>
    <license>The MIT License</license>
    <license lang="ja">MIT ライセンス</license>
    <minVersion>1.0</minVersion>
    <include>main</include>
    <provides>
        <ext>select-left-group</ext>
        <ext>select-right-group</ext>
    </provides>
    <detail><![CDATA[
=== Usage ===
Nothing.
    ]]></detail>
    <detail lang="ja"><![CDATA[
=== 使い方 ===
なし。
    ]]></detail>
</KeySnailPlugin>;

ext.add("select-left-group", selectLeftGroup, M({
    ja : "左のグループを選択",
    en : "select left group"
}));

ext.add("select-right-group", selectRightGroup, M({
    ja : "右のグループを選択",
    en : "select right group"
}));


function selectLeftGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupManager" in window))
        return;

    TabGroupsManager.command.SelectLeftGroup();
}

function selectRightGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupManager" in window))
        return;

    TabGroupsManager.command.SelectRightGroup();
}