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
        <ext>tabgroup-previous</ext>
        <ext>tabgroup-next</ext>
        <ext>tabgroup-goto</ext>
        <ext>tabgroup-create</ext>
        <ext>tabgroup-close</ext>
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

ext.add("tabgroup-previous", selectPreviousGroup, M({
    ja : "左のグループを選択",
    en : "select left group"
}));

ext.add("tabgroup-next", selectNextGroup, M({
    ja : "右のグループを選択",
    en : "select right group"
}));

ext.add("tabgroup-goto", selectNthGroup, M({
    ja : "指定した番号のグループへ移動",
    en : "select group of entered number"
}));

ext.add("tabgroup-create", openNewGroup, M({
    ja : "新しいグループを開く",
    en : "open new group"
}));

ext.add("tabgroup-close", closeCurrentGroup, M({
    ja : "現在のグループを閉じる",
    en : "close current group"
}));


function selectPreviousGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.SelectLeftGroup();
    focusContent();
}

function selectNextGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    TabGroupsManager.command.SelectRightGroup();
    focusContent();
}

function selectNthGroup () {
    if (KeySnail.windowType != "navigator:browser" || !("TabGroupsManager" in window))
        return;

    prompt.read("goto group number: ", function (group_index) {
        if (!group_index.match("\\d+"))
            return;

        TabGroupsManager.command.SelectNthGroup(group_index);
        focusContent();
    });
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

