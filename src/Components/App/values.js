import React, { Component } from 'react';
class ValueTile extends Component {
    render() { 
        const{icon, title, summary} = this.props
        return (
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
            <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr feature-box-light-hover">
              <div className="feature-box-icon">
                <i className={icon} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                  {title}
                </span>
                <p>
                 {summary}
                </p>
              </div>
              <div className="feature-box-overlay bg-white" />
            </div>
          </div>
           );
    }
}
 
class Values extends Component {
    render() { 
        const menus = [
            {icon:"line-icon-Navigation-LeftWindow icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Getting things done", summary:"Getting Things Done is the mantra we live by. Our ingenious team has a “can-do” attitude and believes in Getting Things Done. This mantra makes sense when we deliver our client’s project on time."},
            {icon:"line-icon-Cursor-Click2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Integrity", summary:"We do care about our clients and their requirements, so we are committed to keep our words and deliver what we say. We maintain trust, transparency, and honesty throughout the project."},
            {icon:"line-icon-Like-2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Quality at work", summary:" We select very few clients. Reason? We don’t want to compromise with the quality we deliver. But, don’t believe in our words. If you have a specific requirement, try and test us."},
            {icon:"line-icon-Talk-Man icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Customer satisfaction", summary:"Excellent customer service is the number one job in any company! It is the personality of the company and the reason customers come back. Without customers there is no company!"},
            {icon:"line-icon-Heart icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Accountability", summary:" We don’t believe in just finishing the job, we take it as our own work and nurture it with the utmost care to successfully deliver it. We hold ourselves accountable for the results."},
            {icon:"line-icon-Gear-2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Innovation", summary:"Innovation motivates action: to take risks, encourage new ideas, learn from mistakes, and constantly strive to exceed expectations. We generate solutions for our customers and raise the bar both within our workplace and throughout our industry."}
];
        return (
            menus.map((item, i) => {
                return <ValueTile key={"item-core-values" + i} {...item} />;
                //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
              })
              );
    }
}
 
export default Values;
