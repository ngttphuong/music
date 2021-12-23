/**
 * Created by n_ngo on 2017/06/19.
 */
export module ResponseStatusCodes{
    export const ok = 200;
    export const accepted = 202;
    export const badRequest = 400;
    export const unauthorized = 401;
    export const notFound = 404;
}

export const ResponseMessageAfterApplyCampaign = {
     "200" : "You have successfully applied for an affiliation with the selected campaigns.",
     "202" : "You have successfully applied for an affiliation with the selected campaigns. The creatives of the campaigns that were approved automatically will be available for your use in 10 minutes.",
     "400" : "Some of the selected campaigns were invalid. Please double-check the campaigns you have selected and resend the application request.",
     "unknown" : "Failed to apply for an affiliation with the selected campaigns."
};
