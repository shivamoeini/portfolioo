import MailchimpSubscribe from "react-mailchimp-subscribe";
export const MilchimpForm=()=>{
    const postUrl=`${process.env.REACT_APP_MAILCHIMP_URL}?U=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`

    return(
        <>
        <MailchimpSubscribe
        url={postUrl}
        render={({subscribe,status,message})=>(
            <Newsletter 
            
            status={status}
            message={message}
            onValidated={formData=>subscribe(formData)}
            
            />
        )}
        />
        </>
    )
}