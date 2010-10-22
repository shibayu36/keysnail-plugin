var PLUGIN_INFO =
<KeySnailPlugin>
    <name>TabGroup ScreenLike</name>
    <name lang="ja">TabGruop ScreenLike</name>
    <description>you can use TabGroupManager like screen</description>
    <description lang="ja">タブグループマネージャをスクリーンのように使用することが出来ます。</description>
    <version>0.0.1</version>
    <updateURL></updateURL>
    <iconURL></iconURL>
    <author mail="shibayu36@gmail.com" homepage="http://d.hatena.ne.jp/shiba_yu36/">shiba_yu36</author>
    <license>The MIT License</license>
    <license lang="ja">MIT ライセンス</license>
    <minVersion>1.0</minVersion>
    <include>main</include>
    <provides>
        <ext>tabgroup-select-left-group</ext>
        <ext>tabgroup-select-right-group</ext>
        <ext>tabgroup-open-new-group</ext>
        <ext>tabgroup-close-current-group</ext>
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

ext.add("tabgroup-select-left-group", selectLeftGroup, M({
    ja : "左のグループを選択",
    en : "select left group"
}));

ext.add("tabgroup-select-right-group", selectRightGroup, M({
    ja : "右のグループを選択",
    en : "select right group"
}));

ext.add("tabgroup-open-new-group", openNewGroup, M({
    ja : "新しいグループを開く",
    en : "open new group"
}));

ext.add("tabgroup-close-current-group", closeCurrentGroup, M({
    ja : "現在のグループを閉じる",
    en : "close current group"
}));


function selectLeftGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.SelectLeftGroup();
    focusContent();
}

function selectRightGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.SelectRightGroup();
    focusContent();
}

function openNewGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.OpenNewGroupActive();
}

function closeCurrentGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.CloseActiveGroup();
}

function focusContent() {
    getBrowser().focus();
    _content.focus();
}