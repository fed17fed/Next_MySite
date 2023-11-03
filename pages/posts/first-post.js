import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>Мои работы</title>
      </Head>      
      <h1>Мои работы</h1>
      <div className={utilStyles.mywork}>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/kuzmin.com.ua.png"
              className={utilStyles.myworkimg}
              height={360}
              width={530}
              alt=""
            />
            <a href='https://kuzmin.com.ua/' target='_blank'>CMS WordPress. Woocommerce. ⇾</a>
        </div>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/Alpinist.png"
              className={utilStyles.myworkimg}
              height={360}
              width={530}
              alt=""
            />
            <a href='https://alpinist.kiev.ua/' target='_blank'>CMS WordPress. Адаптивная верстка. ⇾</a>
        </div>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/Ecosistem.png"
              className={utilStyles.myworkimg}
              height={360}
              width={530}
              alt=""
            />
            <a href='https://ese-dp.com.ua/' target='_blank'>CMS OpenCart. Адаптивная верстка. ⇾</a>
        </div>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/steelservice.png"
              className={utilStyles.myworkimg}
              height={360}
              width={530}
              alt=""
            />
            <a href='https://steelservice.com.ua/' target='_blank'>CMS WordPress. Адаптивная верстка. ⇾</a>
        </div>
      </div>
      <h2>Самые последние</h2>
      <div className={utilStyles.mywork}>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/pengstud.png"
              className={utilStyles.myworkimg}
              height={260}
              width={530}
              alt=""
            />
            <a href='https://pengstud.com/' target='_blank'>CMS WordPress. Адаптивная верстка. ⇾</a>
        </div>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/tidivi.shop.png"
              className={utilStyles.myworkimg}
              height={260}
              width={530}
              alt=""
            />
            <a href='https://www.tidivi.shop/' target='_blank'>CMS WordPress. Woocommerce. ⇾</a>
        </div>
      </div>
      <h2>Новые технологии</h2>
      <div className={utilStyles.mywork}>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/Web_bit.png"
              className={utilStyles.myworkimg}
              height={260}
              width={530}
              alt=""
            />
            <a href='https://web-bit.netlify.app/' target='_blank'>React / Gatsby / Netlify. ⇾</a>
        </div>
        <div className={utilStyles.myworkitem}>
          <Image
              priority
              src="/images/olympweb.png"
              className={utilStyles.myworkimg}
              height={260}
              width={530}
              alt=""
            />
            <a href='https://olympweb.netlify.app/' target='_blank'>React / Gatsby / Netlify. ⇾</a>
        </div>
      </div>
     
    </Layout>
    </>
  );
}