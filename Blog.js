import { Layout, Menu, Breadcrumb, Image, Button, Rate,  } from 'antd';
import "./Blog.css";
import React from 'react'
import "antd/dist/antd.css";



const { Header, Content, Footer, } = Layout;


function Blog () {
    return (


        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="3">HOME</Menu.Item>
            <Menu.Item key="1">Menu</Menu.Item>
            <Menu.Item key="2">NEWS</Menu.Item>
            <Menu.Item key="3">Trending</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Top's</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          
<h1>Les Presentamops los top 3 mejores Smartphones del momento </h1>
<ol>
          <b><li> <h1>OnePlus 7T <Rate allowHalf defaultValue={4.5} /> </h1></li></b>
          
          <Image
      width={200}
      src="https://www.pcworld.es/cmsdata/slideshow/3678899/oneplus_7t_thumb800.jpg"
    />
          <p>El OnePlus 7T es un fantástico smartphone que no te dejará indiferente. Ofrece prácticamente lo mismo que el modelo anterior, pero dispone ahora de una pantalla AMOLED de 6,5 pulgadas con tasa de refresco de 90Hz. También viene con tres cámaras traseras y es compatible con una carga inalámbrica de 30W, lo que te permite cargar tu móvil casi a la mitad en tan solo 20 minutos. La experiencia de usuario se enriquece gracias a usar OxygenOS 10 (basado en Android 10). En definitiva, el OnePlus 7T tiene todo lo que puede pedírsele a un smartphone de 2019. El diseño llama la atención sin ser demasiado estridente, gracias a su acabado en mate. Además, valoramos positivamente que sea un terminal bastante ligero. </p>
          <Button href= "https://www.amazon.com/OnePlus-HD1907-Factory-Unlocked-T-Mobile/dp/B08F6PCFML/ref=sr_1_2?dchild=1&keywords=oneplus+7t&qid=1600869052&sr=8-2" type="link">Link</Button>
          <b><li> <h1>iPhone 11 <Rate allowHalf defaultValue={3} /></h1> </li></b>
          <Image
      width={200}
      src="https://www.pcworld.es/cmsdata/slideshow/3678899/iphone_11_thumb800.jpg"
    />
          <p>Antes de que saliera a la venta, ya sabíamos que el iPhone 11 terminaría siendo incluido en esta lista. Apple suele impresionar cada año con sus smartphones y sin necesidad de reinventar la industria de la telefonía móvil. De hecho, bastaba con crear la evolución natural del iPhone XR. Esto es justo lo que es el iPhone 11. No presenta demasiados cambios, y sigue teniendo un bonito diseño (ahora disponible en colores pastel nuevos). El Face ID ha sido mejorado y también lo han hecho las cámaras. La pantalla, pese a no ser OLED, ofrece una experiencia más que decente. Destaca sobre todo el rendimiento, que no presenta ningún problema ni incluso al jugar a juegos muy exigentes. </p>
          <Button href="https://www.amazon.com/dp/B084GSMNRD/ref_=vn_s_iwp_2?pd_rd_w=XEkK4&pf_rd_p=a979d592-39dd-4660-bad2-d3675f2e4ac4&pf_rd_r=7TWEV46G4YDZST5HCECY&pd_rd_r=3c0e36aa-0d8c-4903-876a-05b48da0d952&pd_rd_wg=f6CIa&qid=1600869149" type="link">Link</Button>
          <b><li> <h1>Samsung Galaxy S20 <Rate allowHalf defaultValue={4} /></h1> </li></b>
          <Image
      width={200}
      src="https://www.pcworld.es/cmsdata/slideshow/3678899/mejores-smartphones_samsung-galaxy-s20_thumb800.jpg"
    />
          <p>El Samsung Galaxy S20 es el mejor modelo de la serie S20 y, sin duda, el mejor móvil que fabrica actualmente la compañía surcoreana. Es compacto, potente e incluye una cámara versátil que, pese a no igualar a la del S20 Ultra, no te decepcionará. No cabe duda de que se trata de una de las mejores cámaras del mercado, lo que significa que el Galaxy S20 debería ser una de tus primeras opciones si das prioridad a la fotografía a la hora de comprar un smartphone nuevo. Aunque la conectividad 5G todavía no ha llegado a su potencial, lo hará en algún momento y querrás tener un móvil compatible como este cuando lo haga. Nuestra principal queja es su batería, pero no encontrarás software Android que ofrezca más que este.  </p>
          <Button href= "https://www.amazon.com/Samsung-Unlocked-Fingerprint-Recognition-Long-Lasting/dp/B082XXQDJF/ref=sr_1_1_sspa?crid=5MTN4W3XZGJ&dchild=1&keywords=samsung+s20&qid=1600869199&sprefix=sams%2Caps%2C328&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUVBUODdFQkhIRU04JmVuY3J5cHRlZElkPUExMDE4ODEwSVFCSVlNUVpMNEJPJmVuY3J5cHRlZEFkSWQ9QTAyODM0MzMxUDg2WlE3UzQyQ0FSJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" type="link">Link</Button>
</ol>  








          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Daniel Dyck ©2020 </Footer>
      </Layout>
    );
}




export default Blog;