import type { NextPage } from "next"
import { PlantillaLayout } from "../components/layout"
import { Policies } from "../components/policies"
import { Container } from '@mui/material';

const PoliciesPage: NextPage = () => {
    return (
        <PlantillaLayout title={'EJC | Policies'} contentPage={'Page of privacy policies, legal notice and cookie policies'}>
            <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
                <Policies 
                    company={'EJC - Home Improvement Corp'} 
                    title1={'PRIVACY POLICY'}
                    textTitle1={"This Privacy Policy establishes the terms in which EJC - Home Improvement Corp uses and protects the information that is provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill in the personal information fields with which you can be identified, we do so by ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize that you continually review this page to ensure that you agree with such changes."}
                    title2={'Information that is collected'}
                    textTitle2={'Our website may collect personal information such as: Name, contact information such as your email address and demographic information. Likewise, when necessary, specific information may be required to process an order or make a delivery or billing.'}
                    title3={'Use of the information collected'}
                    textTitle3={'Our website uses the information in order to provide the best possible service, particularly to keep a record of users, of orders, if applicable, and to improve our products and services. It is possible that periodic emails are sent through our site with special offers, new products and other advertising information that we consider relevant to you or that may provide you with some benefit, these emails will be sent to the address you provide and may be canceled. anytime.'}
                    text2Title3={'is highly committed to fulfilling the commitment to keep your information safe. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.'}
                    title4={'Cookies'}
                    textTitle4={'A cookie refers to a file that is sent in order to request permission to be stored on your computer, by accepting said file it is created and the cookie then serves to have information regarding web traffic, and also facilitates future visits to a website. recurrent. Another function that cookies have is that with them the websites can recognize you individually and therefore provide you with the best personalized service on their website.'}
                    text2Title4={'Our website uses cookies to be able to identify the pages that are visited and their frequency. This information is used solely for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer. However, cookies help provide a better service on websites, they do not give access to information on your computer or you, unless you want it and provide it directly. You can accept or deny the use of cookies, however most browsers automatically accept cookies as it serves to have a better web service. You can also change your computer settings to decline cookies. If they are declined you may not be able to use some of our services.'}
                    title5={'Third Party Links'}
                    textTitle5={'This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy or the protection of your data on those other third party sites. These sites are subject to their own privacy policies, so it is recommended that you consult them to confirm that you agree with them.'}
                    title6={'Control of your personal information'}
                    textTitle6={'At any time you can restrict the collection or use of personal information that is provided to our website. Every time you are asked to fill in a form, such as the user registration form, you can check or uncheck the option to receive information by email. If you have marked the option to receive our newsletter or advertising, you can cancel it at any time.'}
                    text2Title6={'This company will not sell, assign or distribute personal information that is collected without your consent, unless required by a judge with a court order.'}
                    text3Title6={'The right is reserved to change the terms of this Privacy Policy at any time.'}
                />
            </Container>
        </PlantillaLayout>
    )
}

export default PoliciesPage