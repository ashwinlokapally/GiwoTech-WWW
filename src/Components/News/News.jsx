import React from 'react'
import './News.css'

const News = () => {
  return (
    <div className='News-main'>
      <h4 className='News-heading'>NEWS</h4>
      <div class="cards-container container flex" id="cards-container">
        <div class="card" onclick="handleOnClick(1)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">BARDA DRIVe</h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
            GiwoTech's cutting-edge AI models for accelerating precision therapeutics discovery through viral modeling caught the attention of BARDA (Biomedical Advanced Research and Development Authority).<br></br> Our innovative approach to model viruses aligns perfectly with BARDA's mission to enhance health security preparedness and response. This recognition from BARDA validates our commitment to leveraging AI for groundbreaking advancements in medical countermeasure development.
            </p>
          </div>
        </div>
        <div class="card" onclick="handleOnClick(2)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">World Health Organization</h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              Type 1 diabetes (previously known as insulin-dependent, juvenile
              or childhood-onset) is characterized by deficient insulin
              production and requires daily administration of insulin. In 2017
              there were 9 million people with type 1 diabetes; the majority of
              them live in high-income countries. Neither its cause nor the
              means to prevent it are known.
            </p>
          </div>
        </div>
        <div class="card" onclick="handleOnClick(3)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">
              Centers for Disease Control and Prevention
            </h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              Gestational diabetes develops in pregnant women who have never had
              diabetes. If you have gestational diabetes, your baby could be at
              higher risk for health problems. Gestational diabetes usually goes
              away after your baby is born. However, it increases your risk for
              type 2 diabetes later in life. Your baby is more likely to have
              obesity as a child or teen and develop type 2 diabetes later in
              life.
            </p>
          </div>
        </div>
        <div class="card" onclick="handleOnClick(4)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">
              Mayo Foundation for Medical Education and Research
            </h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              Insulin is a hormone that comes from the pancreas — a gland
              located behind and below the stomach. Insulin controls how the
              body uses sugar in the following ways: Sugar in the bloodstream
              triggers the pancreas to release insulin. Insulin circulates in
              the bloodstream, enabling sugar to enter the cells. The amount of
              sugar in the bloodstream drops. In response to this drop, the
              pancreas releases less insulin.
            </p>
          </div>
        </div>
        <div class="card" onclick="handleOnClick(5)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">American Diabetes Association</h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              The kidneys work hard to make up for the failing capillaries, so
              kidney disease produces no symptoms until almost all function is
              gone. Also, the symptoms of kidney disease are not specific. The
              first symptom of kidney disease is often fluid buildup. Other
              symptoms of kidney disease include loss of sleep, poor appetite,
              upset stomach, weakness, and difficulty concentrating. It is vital
              to see a doctor regularly.
            </p>
          </div>
        </div>
        <div class="card" onclick="handleOnClick(6)">
          <div
            class="card-header"
            width="40px"
            height="50px"
            id="news-img"
          ></div>
          <div class="card-content">
            <h3 class="news-title">
              Centers for Disease Control and Prevention
            </h3>
            <div class="custom-divider"></div>
            <p class="news-desc" id="news-desc">
              Think of prediabetes as a fork in the road. If you ignore it, your
              risk for type 2 diabetes goes up. Lose a modest amount of weight
              and get regular physical activity, and your risk goes down. Modest
              weight loss means 5% to 7% of body weight, just 10 to 14 pounds
              for a 200-pound person. Regular physical activity means getting at
              least 150 minutes a week of brisk walking or similar activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News