module.exports = {
  "TrustedAdvisor": {
    "Checks": [
      {
        "Name": "Security Groups - Specific Ports Unrestricted",
        "DefaultText": "%X of %Y security group rules allow unrestricted access to a specific port.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns": [
          0,
          1,
          2,
          3,
          5
        ]
      },
      {
        "Name": "Security Groups - Unrestricted Access",
        "DefaultText": "%X of %Y security group rules have a source IP address with a /0 suffix.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns": [
          0,
          1,
          2,
          3,
          4,
          6
        ]
      },
      {
        "Name": "ELB Listener Security",
        "DefaultText": "%X of %Y load balancers have listeners that do not use recommended security configurations.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns": [
          0,
          1,
          2,
          4
        ],
        "OverrideTableHeaders" : {
          "HeaderColumns" : [
            "Region",
            "Load Balancer Name",
            "Load Balancer Port",
            "Reason"
          ]
        }
      },
      {
        "Name": "ELB Security Groups",
        "DefaultText": "%X of %Y load balancers are associated with security groups that are either missing or incorrectly configured.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns": [
          0,
          1,
          3,
          4
        ],
        "OverrideTableHeaders" : {
          "HeaderColumns" : [
            "Region",
            "Load Balancer Name",
            "Security Group IDs",
            "Reason"
          ]
        }
      },
      {
        "Name": "Amazon RDS Security Group Access Risk",
        "DefaultText": "%X of %Y Amazon RDS security group rules create potential security vulnerabilities by granting global access.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name": "Amazon Route 53 MX Resource Record Sets and Sender Policy Framework",
        "DefaultText": "%X of %Y MX resource record sets do not have a corresponding SPF resource record set.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2
        ]
      },
      {
        "Name": "Amazon S3 Bucket Permissions",
        "DefaultText": "%X of %Y buckets have permission properties that grant global access.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns":[
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name": "AWS CloudTrail Logging",
        "DefaultText": "%X of %Y regions are not logging activity by using CloudTrail.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name": "CloudFront Custom SSL Certificates in the IAM Certificate Store",
        "DefaultText": "%X of %Y custom SSL certificates are expired, will soon expire, or are incorrectly configured.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name": "IAM Password Policy",
        "DefaultText": "Password policy is enabled, and all content requirements are enabled",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name": "IAM Use",
        "DefaultText": "At least one IAM user, group, or role has been created for this account",
        "SuppressionText": "%X items have been excluded"
      },
      {
        "Name": "MFA on Root Account",
        "DefaultText": "MFA is enabled on the root account",
        "SuppressionText": "%X items have been excluded"
      },
      {
        "Name": "CloudFront SSL Certificate on the Origin Server",
        "DefaultText": "%X of %Y certificates on your origin are expired, will soon expire, use outdated encryption, or could not be examined.",
        "SuppressionText": "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name" : "IAM Access Key Rotation",
        "DefaultText" : "%X of %Y active access keys have not been rotated in the last 90 days.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name" : "Amazon EBS Snapshots",
        "DefaultText": "%X of %Y volumes do not have a recent snapshot.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          8
        ]
      },
      {
        "Name" : "Amazon EC2 Availability Zone Balance",
        "DefaultText": "%X regions have an imbalanced instance distribution across Availability Zones.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5,
          7
        ]
      },
      {
        "Name" : "Load Balancer Optimization ",
        "DefaultText": "%X of %Y load balancers are configured in a suboptimal way.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          9
        ]
      },
      {
        "Name" : "VPN Tunnel Redundancy",
        "DefaultText": "%X of %Y VPNs have less than 2 active tunnels.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5,
          7
        ]
      },
      {
        "Name" : "Auto Scaling Group Resources",
        "DefaultText": "%X of %Y Auto Scaling groups are configured with unavailable resources.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name" : "Amazon RDS Backups",
        "DefaultText": "%X of %Y DB instances do not have automated backups enabled.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name" : "Amazon RDS Multi-AZ",
        "DefaultText": "%X of %Y DB instances are not Multi-AZ enabled.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name" : "Auto Scaling Group Health Check",
        "DefaultText": "%X of %Y Auto Scaling groups have a suboptimal health check configuration.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3
        ]
      },
      {
        "Name" : "Amazon S3 Bucket Logging",
        "DefaultText": "%X of %Y buckets do not have logging enabled or are not configured properly.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5,
          7
        ]
      },
      {
        "Name" : "Amazon Route 53 Name Server Delegations",
        "DefaultText": "%X of %Y hosted zones do not have all four name server delegations configured.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2
        ]
      },
      {
        "Name" : "Amazon Route 53 High TTL Resource Record Sets",
        "DefaultText": "%X of %Y resource record sets have TTL values that are too large.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "Name" : "Amazon Route 53 Failover Resource Record Sets",
        "DefaultText": "%X of %Y failover resource record sets are not configured correctly.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name" : "Amazon Route 53 Deleted Health Checks",
        "DefaultText": "%X of %Y resource record sets are associated with health checks that have been deleted.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "Name" : "ELB Cross-Zone Load Balancing",
        "DefaultText": "%X of %Y load balancers do not have cross-zone load balancing enabled.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          3
        ],
        "OverrideTableHeaders" : {
          "HeaderColumns" : [
            "Region",
            "Load Balancer Name",
            "Reason"
          ]
        }
      },
      {
        "Name" : "ELB Connection Draining",
        "DefaultText": "%X of %Y load balancers do not have connection draining enabled.",
        "SuppressionText" : "%X items have been excluded",
        "DefaultDisplayColumns" : [
          0,
          1,
          3
        ],
        "OverrideTableHeaders" : {
          "HeaderColumns" : [
            "Region",
            "Load Balancer Name",
            "Reason"
          ]
        }
      }
    ]
  }
};
