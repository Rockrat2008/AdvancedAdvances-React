import React from "react";

function Pricing() {
  return (
    <div class="container mainContent mx-auto">
      <div class="row">
        <div class="col-md-3">
          <h2>Basic - $25/month</h2>
          <ul>
            <li>One agent</li>
            <li>2 clients</li>
            <li>10 advance per client</li>
            <li>Local advances only</li>
          </ul>
          <div class="text-center">
            <a role="button" data-toggle="modal" data-target="#purchaseModal">
              <button class="select-plan" role="button">
                Select
              </button>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <h2>Advanced - $100/month</h2>
          <ul>
            <li>All basic features plus:</li>
            <li>15 agents</li>
            <li>5 clients</li>
            <li>20 advances per client</li>
            <li>5 CONUS advances</li>
            <li>2 international advances</li>
            <li>3 EP teams</li>
            <li>1 team leader/Admin account</li>
          </ul>
          <div class="text-center">
            <a role="button" data-toggle="modal" data-target="#purchaseModal">
              <button class="select-plan" role="button">
                Select
              </button>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <h2>Premier - $200/month</h2>
          <ul>
            <li>All advanced featuers plus:</li>
            <li>50 agents</li>
            <li>10 clients</li>
            <li>30 avdances per client</li>
            <li>10 CONUS advances</li>
            <li>5 international advances</li>
            <li>5 EP teams</li>
            <li>3 team leaders</li>
            <li>Different team leaders for each tem</li>
            <li>
              If desired - Separate administrator account strictly for managing
              teams and permissions
            </li>
            <li>
              Restrict access based on team and client so only the people that
              need to see the information have access to it
            </li>
          </ul>
          <div class="text-center">
            <a role="button" data-toggle="modal" data-target="#purchaseModal">
              <button class="select-plan" role="button">
                Select
              </button>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <h2>Ultimate - $300/month</h2>
          <ul>
            <li>All premier features plus:</li>
            <li>Unlimited agents</li>
            <li>Unlimited clients</li>
            <li>Unlimited advances</li>
            <li>Unlimited international advanes</li>
            <li>Unlimited EP teams</li>
            <li>Unlimited team leaders</li>
          </ul>
          <div class="text-center">
            <a role="button" data-toggle="modal" data-target="#purchaseModal">
              <button class="select-plan" role="button">
                Select
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
