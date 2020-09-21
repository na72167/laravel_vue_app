<template>
<header>
  <div class="site-width">
    <h1>
      <RouterLink class="navbar__brand" to="/top">
        WEBUKATU MARKET
      </RouterLink>
    </h1>
    <nav id="top-nav">
      <ul>
        <!-- ユーザー情報が無かった場合はこちらを表示 -->
            <li>
              <RouterLink class="#" to="/register">
                <a class="btn btn-primary">ユーザー登録</a>
              </RouterLink>
            </li>
            <li>
                <RouterLink class="#" to="/login">
                  <a href="#">ログイン</a>
                </RouterLink>
              </li>
        <!-- ユーザー情報があった場合はこちらを表示 -->
            <li><a href="mypage.php">マイページ</a></li>
            <li><a href="logout.php">ログアウト</a></li>
      </ul>
    </nav>
  </div>
</header>
</template>
