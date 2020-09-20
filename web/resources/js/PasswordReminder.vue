<template>
   <body class="page-signup page-1colum">

    <!-- メニュー -->
    <?php
    require('header.php');
    ?>

    <!-- メインコンテンツ -->
    <div id="contents" class="site-width">

      <!-- Main -->
      <section id="main" >

        <div class="form-container">

          <form action="" method="post" class="form">
           <p>ご指定のメールアドレス宛にパスワード再発行用のURLと認証キーをお送り致します。</p>
           <div class="area-msg">
            <?php
            if(!empty($err_msg['common'])) echo $err_msg['common'];
            ?>
          </div>
            <label class="<?php if(!empty($err_msg['email'])) echo 'err'; ?>">
              Email
              <input type="text" name="email" value="<?php echo getFormData('email'); ?>">
            </label>
            <div class="area-msg">
              <?php
              if(!empty($err_msg['email'])) echo $err_msg['email'];
              ?>
            </div>
            <div class="btn-container">
              <input type="submit" class="btn btn-mid" value="送信する">
            </div>
          </form>
        </div>
        <a href="mypage.php">&lt; マイページに戻る</a>
      </section>

    </div>

    <!-- footer -->
    <?php
    require('footer.php');
    ?>
  </body>
</template>
