import * as React from 'react';
import { Query } from "react-apollo";
import { GET_CAMPAIGNS } from '../../../queries';
import Loading from '../../ui/Loading';
import CampaignStyles from './Campaigns.module.scss';

class Campaigns extends React.Component {
    render() {
        return (
            <Query query={GET_CAMPAIGNS}>
                {({loading, error, data}) => {
                    if(loading) return <Loading />;
                    if(error) return <p>Error :( {error}</p>;
                    return (
                        <div className={CampaignStyles['wrapper']}>
                            {data.getCampaigns.map(item => (
                                            <div className={CampaignStyles['campaign-wrapper']} key={item.CampaignId}>        
                                            <div className={CampaignStyles['campaign-detail']}> 
                                            <div className={CampaignStyles['product-column']}>
                                                <div className={CampaignStyles["product-image"]}>
                                                    <img className={CampaignStyles["prod-img"]} src={item.ProductImage} alt="" />
                                                    <h3><span className={CampaignStyles["buy-our"]}>Buy our</span> <span className={CampaignStyles["product-text"]}>{item.ProductTitle}</span></h3>
                                                    <div className={CampaignStyles["blurb"]}>
                                                        <p className="myclass">{item.PrizeIntro} {item.ProductPrice}</p>
                                                    </div>
                                                    <p className={CampaignStyles["red-text, hover-hide"]}>Buy this product</p>
                                                    <div className="controls">
                                                        <div className={CampaignStyles["product-quantity"]}>
                                                            <button className={CampaignStyles["minus-btn,icon-minus-1,disabled"]} type="button" name="button" tabIndex="0"></button>
                                                            <input type="tel" name="qty" tabIndex="0" maxLength="4" />
                                                            <button className={CampaignStyles["plus-btn icon-plus-1"]} type="button" name="button" tabIndex="0"></button>
                                                        </div>
                                                        <button className={CampaignStyles["add-to-cart"]} type="submit" tabIndex="0">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>



                                        



                                        </div>
                                            </div>    
                                    )
                            )}
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default Campaigns;