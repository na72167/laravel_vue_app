<template>
    <body class="page-signup page-1colum">

    <!-- ヘッダー -->

    <!-- メインコンテンツ -->
    <div id="contents" class="site-width">

      <!-- Main -->
      <section id="main" >

        <div class="form-container">

          <form action="" method="post" class="form" @submit.prevent="register">
            <h2 class="title">ユーザー登録</h2>
            <div class="area-msg">
              <!-- 全体的なエラーを吐き出す処理を書く <?php
              if(!empty($err_msg['common'])) echo $err_msg['common'];?>
             -->
            </div>
            <label class="<?php if(!empty($err_msg['email'])) echo 'err'; ?>">
              Email
              <input type="text" v-model="registerForm.email">
            </label>
            <div class="area-msg">
              <!-- email用のエラーを吐き出す処理を書く
              <?php
              if(!empty($err_msg['email'])) echo $err_msg['email'];
              ?>
            -->
            </div>
            <label class="<?php if(!empty($err_msg['pass'])) echo 'err'; ?>">
              パスワード <span style="font-size:12px">※英数字６文字以上</span>
              <input type="password" v-model="registerForm.pass">
            </label>
            <div class="area-msg">
            <!-- パスワード用のエラーを吐き出す処理を書く
              <?php
              if(!empty($err_msg['pass'])) echo $err_msg['pass'];
              ?>
            -->
            </div>
            <label class="<?php if(!empty($err_msg['pass_re'])) echo 'err'; ?>">
              パスワード（再入力）
              <input type="password" v-model="registerForm.pass_re">
            </label>
            <div class="area-msg">
              <!-- 確認用パスワードのエラーを吐き出す処理を書く
              <?php
              if(!empty($err_msg['pass_re'])) echo $err_msg['pass_re'];
              ?>
            -->
            </div>
            <div class="btn-container">
              <input type="submit" class="btn btn-mid" value="登録する">
            </div>
          </form>
        </div>

      </section>

    </div>

    <!-- footer -->

    </body>
</template>
<script>
  export default {
      data () {
      return {
        registerForm: {
          email: '',
          pass: '',
          pass_re: ''
          },
        }
      },
      methods: {
        async register() {
        // authストアのresigterアクションを呼び出す
        await this.$store.dispatch('auth/register', this.registerForm)

        // トップページに移動する
        this.$router.push('/')
      }
    }
  }
</script>
