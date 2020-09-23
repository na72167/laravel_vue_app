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
        <!-- v-model情報で切り替え -->
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
        <!-- v-model情報で切り替え -->
        <!-- ユーザー情報があった場合はこちらを表示 -->
            <li>
              <RouterLink class="#" to="/mypage">
                  <a href="#">マイページ</a>
              </RouterLink>
            </li>
            <li>
              <RouterLink class="#" to="/logout">
                <a href="#">ログアウト</a>
              </RouterLink>
            </li>
      </ul>
    </nav>
  </div>
</header>
</template>
