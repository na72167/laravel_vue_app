import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Login from './Login.vue'
import Register from './Register.vue'
import Withdrawal from './Withdrawal.vue'
import Top from './Top.vue'
import Mypage from './Mypage.vue'
import PasswordReminder from './PasswordReminder.vue'
import ChangePassword from './ChangePassword.vue'
import ProductRegister from './ProductRegister.vue'
import ProductDetail from './ProductDetail.vue'
import MSG from './MSG.vue'
import TranSale from './TranSale.vue'
import ProfEdit from './ProfEdit.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/withdrawal',
    component: Withdrawal
  },
  {
    path: '/top',
    component: Top
  },
  {
    path: '/',
    component: Top
  },
  {
    path: '/mypage',
    component: Mypage
  },
  {
    path: '/passwordreminder',
    component: PasswordReminder
  },
  {
    path: '/changepassword',
    component: ChangePassword
  },
  {
    path: '/productregister',
    component: ProductRegister
  },
  {
    path: '/productdetail',
    component: ProductDetail
  },
  {
    path: '/msg',
    component: MSG
  },
  {
    path: '/transale',
    component: TranSale
  },
  {
    path: '/profedit',
    component: ProfEdit
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
