import { CategoryTab } from "@/components/sections/TreatmentCategories";

export const categories: CategoryTab[] = [
  {
    id: "orthopaedic",
    title: "Orthopaedic Conditions",
    conditions: [
      {
        name: "Cervical Pain / Headache",
        image: "/treatment/cervical.webp",
        description:
          "Cervical pain and headaches often result from muscle tension, poor posture, or underlying cervical spine issues. Our specialized physiotherapy approaches target the root causes to provide lasting relief.",
        treatments: [
          "Manual therapy techniques",
          "Postural correction",
          "Targeted strengthening exercises",
          "Ergonomic advice",
          "Relaxation techniques",
        ],
      },
      {
        name: "Low Back Pain",
        image: "/treatment/lowback.webp",

        description:
          "Low back pain can significantly impact daily activities and quality of life. Our comprehensive assessment identifies the underlying causes to develop personalized treatment plans.",
        treatments: [
          "Core stabilization exercises",
          "Manual therapy",
          "Postural education",
          "Movement pattern retraining",
          "Pain management strategies",
        ],
      },
      {
        name: "Shoulder Pain",
        image: "/treatment/shoulder.webp",
        description:
          "Shoulder pain can arise from various conditions including rotator cuff injuries, impingement, or frozen shoulder. Our targeted approach focuses on restoring mobility and function.",
        treatments: [
          "Rotator cuff strengthening",
          "Joint mobilization",
          "Range of motion exercises",
          "Scapular stabilization",
          "Activity modification guidance",
        ],
      },
      {
        name: "Elbow Pain",
        image: "/treatment/elbow.webp",
        description:
          "Elbow conditions like tennis elbow or golfer's elbow can be debilitating. Our evidence-based treatments address both symptoms and underlying causes for optimal recovery.",
        treatments: [
          "Eccentric strengthening",
          "Manual therapy",
          "Activity modification",
          "Taping techniques",
          "Gradual return to activity protocols",
        ],
      },
      {
        name: "Wrist and Hand Pain",
        image: "/treatment/wrist.webp",
        description:
          "Hand and wrist pain can interfere with daily activities and work. Our specialized treatments focus on restoring function and reducing pain in these complex structures.",
        treatments: [
          "Joint mobilization",
          "Nerve gliding exercises",
          "Strengthening protocols",
          "Splinting recommendations",
          "Ergonomic modifications",
        ],
      },
      {
        name: "Hip Pain",
        image: "/treatment/hip.webp",
        description:
          "Hip pain can stem from joint issues, muscle imbalances, or referred pain. Our comprehensive assessment ensures accurate diagnosis and effective treatment planning.",
        treatments: [
          "Hip mobilization techniques",
          "Core and hip strengthening",
          "Gait retraining",
          "Balance exercises",
          "Functional movement patterns",
        ],
      },
      {
        name: "Knee Pain",
        image: "/treatment/knee.webp",
        description:
          "Knee pain can result from injuries, overuse, or degenerative conditions. Our tailored approach addresses pain while improving strength, stability and function.",
        treatments: [
          "Quadriceps and hamstring strengthening",
          "Proprioceptive training",
          "Taping techniques",
          "Gait analysis",
          "Activity modification guidance",
        ],
      },
      {
        name: "Ankle & Foot Pain",
        image: "/treatment/foot.webp",
        description:
          "Ankle and foot conditions can affect mobility and balance. Our specialized treatments target pain relief while restoring proper biomechanics and function.",
        treatments: [
          "Joint mobilization",
          "Balance training",
          "Gait analysis",
          "Strengthening exercises",
          "Footwear recommendations",
        ],
      },
    ],
  },
  {
    id: "neurological",
    title: "Neurological Conditions",
    conditions: [
      {
        name: "Stroke (Cerebrovascular Accident)",
        image: "/treatment/neuro/stroke.jpg",
        description:
          "Post-stroke rehabilitation focuses on regaining function, improving mobility, and enhancing quality of life through specialized neurological physiotherapy techniques.",
        treatments: [
          "Neurodevelopmental techniques",
          "Task-specific training",
          "Constraint-induced movement therapy",
          "Balance and coordination exercises",
          "Functional electrical stimulation",
        ],
      },
      {
        name: "Parkinson's Disease",
        image: "/treatment/neuro/parkinson.jpg",
        description:
          "Our specialized approach for Parkinson's disease focuses on maintaining mobility, improving balance, and enhancing quality of life through targeted interventions.",
        treatments: [
          "LSVT BIG therapy",
          "Gait training",
          "Balance exercises",
          "Fall prevention strategies",
          "Functional mobility training",
        ],
      },
      {
        name: "Head Injury",
        image: "/treatment/neuro/head.jpg",
        description:
          "Traumatic brain injury rehabilitation requires a comprehensive approach addressing physical, cognitive, and emotional aspects of recovery.",
        treatments: [
          "Vestibular rehabilitation",
          "Balance training",
          "Cognitive-motor dual tasking",
          "Gradual return to activities",
          "Coordination exercises",
        ],
      },
      {
        name: "Guillain-Barré Syndrome (GBS)",
        image: "/treatment/neuro/gbs.jpg",
        description:
          "GBS recovery focuses on progressive strengthening, functional training, and adaptive strategies to regain independence and mobility.",
        treatments: [
          "Progressive strengthening",
          "Respiratory exercises",
          "Functional mobility training",
          "Sensory reintegration",
          "Energy conservation techniques",
        ],
      },
      {
        name: "Spinal Cord Injury",
        image: "/treatment/neuro/spinal.jpg",
        description:
          "Our specialized approach for spinal cord injuries focuses on maximizing function, preventing complications, and enhancing quality of life.",
        treatments: [
          "Transfer training",
          "Wheelchair skills",
          "Strength and conditioning",
          "Respiratory management",
          "Adaptive equipment training",
        ],
      },
      {
        name: "Myasthenia Gravis",
        image: "/treatment/neuro/gravis.jpg",
        description:
          "Treatment for myasthenia gravis focuses on energy conservation, strategic strengthening, and functional adaptations to manage fatigue and optimize function.",
        treatments: [
          "Energy conservation techniques",
          "Breathing exercises",
          "Activity pacing",
          "Adaptive strategies",
          "Gentle strengthening protocols",
        ],
      },
      {
        name: "Peripheral Neuropathy",
        image: "/treatment/neuro/peripheral.jpg",
        description:
          "Our approach to peripheral neuropathy addresses sensory deficits, balance issues, and functional limitations through specialized interventions.",
        treatments: [
          "Sensory retraining",
          "Balance exercises",
          "Gait training",
          "Fall prevention",
          "Pain management strategies",
        ],
      },
      {
        name: "Bell's Palsy / Facial Palsy",
        image: "/treatment/neuro/bell.jpg",
        description:
          "Facial palsy rehabilitation focuses on muscle reeducation, symmetry, and functional restoration for facial expressions and functions.",
        treatments: [
          "Facial exercises",
          "Neuromuscular retraining",
          "Massage techniques",
          "Electrical stimulation",
          "Functional retraining",
        ],
      },
    ],
  },
  {
    id: "paediatric",
    title: "Paediatric Conditions",
    conditions: [
      {
        name: "Cerebral Palsy",
        image: "/treatment/paediatric/cerebral.jpg",
        description:
          "Our pediatric physiotherapy for cerebral palsy focuses on maximizing movement potential, functional independence, and participation in daily activities.",
        treatments: [
          "Neurodevelopmental treatment",
          "Constraint-induced movement therapy",
          "Functional training",
          "Orthotic management",
          "Play-based therapy",
        ],
      },
      {
        name: "Autism Spectrum Disorder",
        image: "/treatment/paediatric/autism.jpg",

        description:
          "Our sensory-informed approach addresses motor skills, coordination, and sensory processing to enhance participation and function.",
        treatments: [
          "Sensory integration therapy",
          "Motor planning activities",
          "Coordination exercises",
          "Structured physical activities",
          "Visual motor integration",
        ],
      },
      {
        name: "ADHD",
        image: "/treatment/paediatric/adhd.jpg",

        description:
          "Physical therapy interventions for ADHD focus on motor skills, coordination, and sensory regulation to support attention and participation.",
        treatments: [
          "Vestibular activities",
          "Proprioceptive input",
          "Motor planning exercises",
          "Bilateral coordination activities",
          "Structured movement breaks",
        ],
      },
      {
        name: "Development Delay/GDD",
        image: "/treatment/paediatric/delay.jpg",

        description:
          "Our developmental approach addresses milestone achievement through play-based, family-centered interventions tailored to each child's needs.",
        treatments: [
          "Developmental positioning",
          "Milestone-specific activities",
          "Parent/caregiver education",
          "Play-based interventions",
          "Sensorimotor activities",
        ],
      },
      {
        name: "Spina Bifida",
        image: "/treatment/paediatric/spina.jpg",

        description:
          "Our comprehensive approach addresses mobility, strength, and functional independence while preventing secondary complications.",
        treatments: [
          "Mobility training",
          "Orthotic management",
          "Strengthening exercises",
          "Transfer training",
          "Adaptive equipment recommendations",
        ],
      },
      {
        name: "Muscular Dystrophy",
        image: "/treatment/paediatric/muscular.jpg",

        description:
          "Our approach focuses on maintaining function, preventing contractures, and enhancing quality of life through specialized interventions.",
        treatments: [
          "Range of motion exercises",
          "Respiratory management",
          "Positioning strategies",
          "Adaptive equipment training",
          "Energy conservation techniques",
        ],
      },
      {
        name: "Erb's Palsy",
        image: "/treatment/paediatric/erb.jpg",

        description:
          "Early intervention for Erb's palsy focuses on preventing contractures, facilitating normal movement patterns, and maximizing upper limb function.",
        treatments: [
          "Range of motion exercises",
          "Positioning strategies",
          "Sensory stimulation",
          "Constraint-induced movement therapy",
          "Functional play activities",
        ],
      },
      {
        name: "Sensory Processing Disorder",
        image: "/treatment/paediatric/sensory.jpg",

        description:
          "Our sensory-informed approach addresses sensory processing challenges to improve participation, function, and quality of life.",
        treatments: [
          "Sensory integration therapy",
          "Sensory diet planning",
          "Environmental modifications",
          "Adaptive strategies",
          "Parent/caregiver education",
        ],
      },
    ],
  },
  {
    id: "geriatric",
    title: "Geriatric Conditions",
    conditions: [
      {
        name: "Osteoarthritis",
        image: "/treatment/geriatric/oste.jpg",
        description:
          "Our approach to osteoarthritis focuses on pain management, maintaining joint mobility, and optimizing function through evidence-based interventions.",
        treatments: [
          "Joint protection strategies",
          "Appropriate exercise prescription",
          "Manual therapy",
          "Assistive device training",
          "Activity modification guidance",
        ],
      },
      {
        name: "Degenerative Disc Herniation",
        image: "/treatment/geriatric/disc.jpg",

        description:
          "Our specialized approach addresses pain, mobility limitations, and functional restrictions associated with degenerative disc conditions.",
        treatments: [
          "Specific exercise protocols",
          "Postural education",
          "Manual therapy",
          "Activity modification",
          "Self-management strategies",
        ],
      },
      {
        name: "Fall and Balance Disorder",
        image: "/treatment/geriatric/fall.jpg",

        description:
          "Our comprehensive fall prevention program addresses risk factors, improves balance, and enhances confidence to reduce fall risk.",
        treatments: [
          "Balance training",
          "Strength exercises",
          "Gait training",
          "Home safety assessment",
          "Vestibular rehabilitation",
        ],
      },
      {
        name: "Chronic Pain Syndrome",
        image: "/treatment/geriatric/chronic.jpg",

        description:
          "Our multifaceted approach to chronic pain incorporates pain neuroscience education, graded activity, and self-management strategies.",
        treatments: [
          "Pain neuroscience education",
          "Graded motor imagery",
          "Paced activity progression",
          "Mindfulness techniques",
          "Functional goal setting",
        ],
      },
      {
        name: "Chronic Low Back Pain",
        image: "/treatment/geriatric/low.jpg",

        description:
          "Our evidence-based approach addresses the complex nature of chronic low back pain through a biopsychosocial framework.",
        treatments: [
          "Core stabilization",
          "Movement pattern retraining",
          "Graded exposure to activities",
          "Pain management strategies",
          "Lifestyle modifications",
        ],
      },
    ],
  },
  {
    id: "sports",
    title: "Sports Conditions",
    conditions: [
      {
        name: "Rotator Cuff Tear",
        image: "/treatment/sports/tear.jpg",
        description:
          "Specialized rehab for rotator cuff injuries to restore shoulder strength and sport performance.",
        treatments: [
          "Progressive strengthening",
          "Scapular stabilization",
          "Range of motion exercises",
          "Sport-specific rehabilitation",
          "Return to sport protocols",
        ],
      },
      {
        name: "Tennis Elbow",
        image: "/treatment/sports/tennis.jpg",
        description:
          "Evidence-based rehab for lateral epicondylitis focusing on pain relief and strengthening.",
        treatments: [
          "Eccentric strengthening",
          "Manual therapy",
          "Activity modification",
          "Taping techniques",
          "Gradual return to sport progression",
        ],
      },
      {
        name: "Golfer Elbow",
        image: "/treatment/sports/tennis.jpg",
        description:
          "Targeted therapy for medial epicondylitis to improve grip strength and reduce elbow strain.",
        treatments: [
          "Eccentric wrist flexor training",
          "Soft tissue mobilization",
          "Stretching exercises",
          "Ergonomic education",
          "Progressive loading program",
        ],
      },
      {
        name: "Dislocated Shoulder",
        image: "/treatment/sports/shoulder.jpg",
        description:
          "Rehabilitation for post-dislocation shoulder instability to regain full function and prevent recurrence.",
        treatments: [
          "Range of motion restoration",
          "Strengthening rotator cuff and scapular stabilizers",
          "Proprioceptive training",
          "Gradual return to activity",
          "Instability prevention protocols",
        ],
      },
      {
        name: "Biceps Tendinopathy",
        image: "/treatment/sports/bicep.jpg",
        description:
          "Treatment for overuse injuries to the biceps tendon using progressive loading strategies.",
        treatments: [
          "Isometric and eccentric loading",
          "Soft tissue therapy",
          "Postural correction",
          "Stretching tight structures",
          "Activity modification",
        ],
      },
      {
        name: "ACL & PCL Injury",
        image: "/treatment/sports/acl.jpg",
        description:
          "Rehab for ligament injuries with evidence-based protocols for safe return to play.",
        treatments: [
          "Neuromuscular training",
          "Progressive strengthening",
          "Proprioceptive exercises",
          "Sport-specific drills",
          "Return to sport testing",
        ],
      },
      {
        name: "Meniscal Tear",
        image: "/treatment/sports/meniscal.jpg",
        description:
          "Pain management and functional recovery for meniscal injuries.",
        treatments: [
          "Progressive loading",
          "Quadriceps strengthening",
          "Neuromuscular control exercises",
          "Functional progression",
          "Return to sport guidance",
        ],
      },
      {
        name: "Runner’s Knee",
        image: "/treatment/sports/runner.jpg",
        description:
          "Patellofemoral pain management to enhance running performance and reduce pain.",
        treatments: [
          "Hip and knee strengthening",
          "Biomechanical correction",
          "Stretching tight muscles",
          "Gait retraining",
          "Activity modification",
        ],
      },
      {
        name: "Jumper’s Knee",
        image: "/treatment/sports/jumper.jpg",
        description:
          "Treatment for patellar tendinopathy with focus on tendon loading and functional rehab.",
        treatments: [
          "Eccentric quadriceps loading",
          "Shockwave therapy (if applicable)",
          "Plyometric training",
          "Functional movement drills",
          "Gradual return to sport",
        ],
      },
      {
        name: "IT Band Syndrome",
        image: "/treatment/sports/it.jpg",
        description:
          "Lateral knee pain treatment targeting flexibility, strength and mechanics.",
        treatments: [
          "Foam rolling and stretching",
          "Hip abductor strengthening",
          "Running form correction",
          "Activity modification",
          "Manual therapy",
        ],
      },
      {
        name: "Groin, Hip Flexor, Hamstring, Quadriceps & Calf Strain",
        image: "/treatment/sports/groin.jpg",
        description:
          "Comprehensive management of lower limb muscle strains to restore strength and flexibility.",
        treatments: [
          "Progressive lengthening exercises",
          "Manual therapy",
          "Neuromuscular re-education",
          "Return to sport drills",
          "Injury prevention programs",
        ],
      },
      {
        name: "Ankle Sprain",
        image: "/treatment/sports/ankle.jpg",
        description:
          "Rehab focused on stability, proprioception, and sport-specific recovery.",
        treatments: [
          "Proprioceptive training",
          "Progressive strengthening",
          "Functional stability exercises",
          "Sport-specific drills",
          "Return to play testing",
        ],
      },
      {
        name: "Overtraining Syndrome",
        image: "/treatment/sports/overtraining.jpg",
        description:
          "Managing fatigue and recovery strategies for overreached or overtrained athletes.",
        treatments: [
          "Training load adjustment",
          "Nutrition and hydration review",
          "Psychological counseling",
          "Sleep hygiene practices",
          "Recovery planning",
        ],
      },
      {
        name: "Cramping and Muscle Spasm",
        image: "/treatment/sports/cramp.jpg",
        description:
          "Preventing and managing acute muscle cramps and spasms during or after activity.",
        treatments: [
          "Hydration and electrolyte balance",
          "Neuromuscular stretching",
          "Soft tissue therapy",
          "Conditioning strategies",
          "Education on triggers",
        ],
      },
      {
        name: "Bursitis",
        image: "/treatment/sports/bursitis.jpg",
        description:
          "Reducing inflammation and restoring function in bursitis-affected joints.",
        treatments: [
          "Anti-inflammatory modalities",
          "Activity modification",
          "Stretching and strengthening",
          "Ergonomic corrections",
          "Manual therapy",
        ],
      },
    ],
  },
  {
    id: "ergonomic",
    title: "Ergonomic Conditions",
    conditions: [
      {
        name: "Upper Cross Syndrome",
        image: "/treatment/ergonomic/cross.jpg",
        description:
          "Our approach addresses postural imbalances, muscle length-tension relationships, and ergonomic factors contributing to upper cross syndrome.",
        treatments: [
          "Postural correction",
          "Targeted stretching",
          "Strengthening of weak muscles",
          "Ergonomic assessment",
          "Self-management strategies",
        ],
      },
      {
        name: "Lower Cross Syndrome",
        image: "/treatment/ergonomic/lowercross.jpg",
        description:
          "Our comprehensive approach addresses the muscle imbalances, movement patterns, and functional limitations associated with lower cross syndrome.",
        treatments: [
          "Core stabilization",
          "Hip flexor stretching",
          "Gluteal strengthening",
          "Movement pattern retraining",
          "Ergonomic advice",
        ],
      },
      {
        name: "Forward Head Posture",
        image: "/treatment/ergonomic/head_posture.jpg",
        description:
          "Our approach addresses the muscular imbalances, joint restrictions, and habits contributing to forward head posture.",
        treatments: [
          "Deep neck flexor training",
          "Thoracic mobility exercises",
          "Postural awareness training",
          "Workstation assessment",
          "Self-management strategies",
        ],
      },
      {
        name: "Cervicogenic Headache",
        image: "/treatment/ergonomic/cv_Headache.jpg",
        description:
          "Our specialized approach addresses the cervical spine dysfunction contributing to headaches through manual therapy and targeted exercises.",
        treatments: [
          "Manual therapy techniques",
          "Deep neck flexor training",
          "Postural correction",
          "Ergonomic assessment",
          "Self-management strategies",
        ],
      },
      {
        name: "Postural Kyphosis",
        image: "/treatment/ergonomic/ps_k.jpg",
        description:
          "Our approach addresses the muscular imbalances, joint restrictions, and habits contributing to excessive thoracic kyphosis.",
        treatments: [
          "Thoracic mobility exercises",
          "Postural muscle strengthening",
          "Ergonomic assessment",
          "Postural awareness training",
          "Self-management strategies",
        ],
      },
      {
        name: "Mechanical Low Back Pain",
        image: "/treatment/ergonomic/pain.jpg",
        description:
          "Our approach addresses the movement patterns, muscle imbalances, and ergonomic factors contributing to mechanical low back pain.",
        treatments: [
          "Movement pattern assessment",
          "Core stabilization",
          "Manual therapy",
          "Ergonomic assessment",
          "Self-management strategies",
        ],
      },
    ],
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Conditions",
    conditions: [
      {
        name: "Hip Replacement Surgery",
        image: "/treatment/postsurgical/hip.jpg",
        description:
          "Our protocol-based approach for total hip replacement rehabilitation focuses on safe recovery, functional restoration, and return to activities.",
        treatments: [
          "Protocol-based progression",
          "Gait training",
          "Precaution education",
          "Functional training",
          "Home exercise program",
        ],
      },
      {
        name: "Knee Replacement Surgery",
        image: "/treatment/postsurgical/knee.jpg",

        description:
          "Our comprehensive approach for total knee replacement rehabilitation focuses on range of motion, strength, and functional independence.",
        treatments: [
          "Range of motion exercises",
          "Progressive strengthening",
          "Gait training",
          "Functional activities",
          "Home exercise program",
        ],
      },
      {
        name: "ACL Reconstruction",
        image: "/treatment/postsurgical/acl.jpg",

        description:
          "Our evidence-based protocol for ACL reconstruction rehabilitation follows established timelines to ensure optimal recovery and return to sport.",
        treatments: [
          "Phase-appropriate exercises",
          "Neuromuscular training",
          "Strength and power development",
          "Sport-specific rehabilitation",
          "Return to sport testing",
        ],
      },
      {
        name: "Rotator Cuff Repair",
        image: "/treatment/postsurgical/cuff.jpg",

        description:
          "Our protocol-based approach for rotator cuff repair rehabilitation respects tissue healing while progressively restoring function.",
        treatments: [
          "Protected range of motion",
          "Progressive strengthening",
          "Scapular stabilization",
          "Functional training",
          "Return to activity guidance",
        ],
      },
      {
        name: "Spinal Fusion Surgery",
        image: "/treatment/postsurgical/spine.jpg",

        description:
          "Our specialized approach for spinal fusion rehabilitation focuses on safe mobility, core stability, and functional independence.",
        treatments: [
          "Safe mobility training",
          "Core stabilization",
          "Body mechanics education",
          "Functional activities",
          "Home exercise program",
        ],
      },
      {
        name: "Fracture Fixation",
        image: "/treatment/postsurgical/fracture.jpg",

        description:
          "Our protocol-based approach for fracture rehabilitation respects bone healing while progressively restoring function and strength.",
        treatments: [
          "Protected mobility",
          "Progressive weight bearing",
          "Staged strengthening",
          "Functional training",
          "Return to activity guidance",
        ],
      },
      {
        name: "Disectomy/laminectomy",
        image: "/treatment/postsurgical/dis.jpg",
        description:
          "Post-operative rehabilitation focusing on spinal mobility and pain management.",
        treatments: [
          "Gentle spinal mobilizations",
          "Core strengthening exercises",
          "Posture correction",
          "Pain management techniques",
          "Gradual return to daily activities",
        ],
      },
      {
        name: "Ankle ligament reconstruction",
        image: "/treatment/postsurgical/ankle.jpg",
        description:
          "Rehabilitation protocol focusing on restoring ankle stability and function.",
        treatments: [
          "Progressive weight-bearing exercises",
          "Balance and proprioception training",
          "Strengthening exercises for ankle evertors",
          "Functional training",
          "Return to sport-specific drills",
        ],
      },
      {
        name: "Joint arthroplasty",
        image: "/treatment/postsurgical/joint.jpg",
        description:
          "Rehabilitation focusing on restoring joint function and mobility.",
        treatments: [
          "Range of motion exercises",
          "Strengthening exercises",
          "Functional training",
          "Gait training",
          "Home exercise program",
        ],
      },
      {
        name: "Amputation",
        image: "/treatment/postsurgical/amp.jpg",
        description:
          "Comprehensive rehabilitation focusing on prosthetic use and functional independence.",
        treatments: [
          "Wound care and stump management",
          "Prosthetic fitting and training",
          "Strengthening exercises",
          "Gait training with prosthesis",
          "Psychosocial support",
        ],
      },
      {
        name: "Spinal decompression surgery",
        image: "/treatment/postsurgical/decomp.jpg",
        description:
          "Focused rehabilitation to relieve nerve pressure, restore mobility, and strengthen the back.",
        treatments: [
          "Pain management and neural mobilization",
          "Gradual spinal extension and flexion exercises",
          "Core strengthening and postural correction",
          "Activity pacing and endurance building",
          "Education on spine protection",
        ],
      },
      {
        name: "Tendon transfer surgery",
        image: "/treatment/postsurgical/ten.jpg",
        description:
          "Rehabilitation aimed at retraining new muscle-tendon pathways and functional integration.",
        treatments: [
          "Motor re-education",
          "Strengthening of transferred tendons",
          "Joint mobility exercises",
          "ADL (activities of daily living) retraining",
          "Neuromuscular re-education",
        ],
      },
      {
        name: "Detrotation Osteotomy",
        image: "/treatment/postsurgical/fracture.jpg",
        description:
          "Corrective rehabilitation following derotation osteotomy to restore alignment and mobility.",
        treatments: [
          "Postural and gait correction",
          "Joint mobility and flexibility",
          "Progressive strengthening",
          "Functional training",
          "Orthotic support guidance",
        ],
      },
      {
        name: "Botox release",
        image: "/treatment/postsurgical/botox.jpg",
        description:
          "Post-injection rehab for spasticity management and functional muscle use.",
        treatments: [
          "Stretching of injected muscles",
          "Strengthening of antagonist groups",
          "Functional mobility exercises",
          "Neuromuscular retraining",
          "Tone management techniques",
        ],
      },
      {
        name: "Adductor, Hamstring, gastrosoleus release",
        image: "/treatment/postsurgical/gas.jpg",
        description:
          "Rehabilitation aimed at improving range and reducing contractures after soft tissue release.",
        treatments: [
          "Stretching of released muscles",
          "Strengthening of opposing muscle groups",
          "Postural alignment training",
          "Gait retraining",
          "Orthotic or splint use if needed",
        ],
      },
    ],
  },
  {
    id: "womens-health",
    title: "Women's Health",
    conditions: [
      {
        name: "Diastasis Recti",
        image: "/treatment/women/recti.jpg",

        description:
          "Our specialized approach for diastasis recti focuses on core function, progressive loading, and functional integration.",
        treatments: [
          "Core activation training",
          "Progressive loading",
          "Functional movement patterns",
          "Postural education",
          "Breathing strategies",
        ],
      },
      {
        name: "Postural Related Back Pain",
        image: "/treatment/women/back.jpg",
        description:
          "Our approach addresses the unique postural changes and demands during and after pregnancy to manage and prevent back pain.",
        treatments: [
          "Postural education",
          "Core stabilization",
          "Manual therapy",
          "Supportive devices guidance",
          "Self-management strategies",
        ],
      },
      {
        name: "Sacroiliac/Pelvic Girdle Pain",
        image: "/treatment/women/girdle.jpg",

        description:
          "Our specialized approach addresses the biomechanical changes and pain associated with sacroiliac joint and pelvic girdle dysfunction.",
        treatments: [
          "Pelvic stabilization exercises",
          "Manual therapy",
          "Supportive devices",
          "Activity modification",
          "Self-management strategies",
        ],
      },
      {
        name: "Joint Laxity",
        image: "/treatment/women/lax.jpg",

        description:
          "Our approach addresses the increased joint laxity during pregnancy through appropriate stabilization exercises and movement strategies.",
        treatments: [
          "Joint protection strategies",
          "Appropriate strengthening",
          "Proprioceptive training",
          "Supportive devices guidance",
          "Activity modification",
        ],
      },
      {
        name: "Nerve Compression Syndrome",
        image: "/treatment/women/nerve.jpg",

        description:
          "Our specialized approach addresses nerve compression syndromes that may occur during pregnancy through appropriate positioning and exercises.",
        treatments: [
          "Neural mobilization",
          "Positioning strategies",
          "Supportive devices",
          "Activity modification",
          "Self-management techniques",
        ],
      },
      {
        name: "Urinary Incontinence",
        image: "/treatment/women/urine.jpg",
        description:
          "Our specialized pelvic health approach addresses various types of urinary incontinence through evidence-based interventions.",
        treatments: [
          "Pelvic floor muscle training",
          "Bladder retraining",
          "Lifestyle modifications",
          "Functional integration",
          "Self-management strategies",
        ],
      },
    ],
  },
  {
    id: "cardio-respiratory",
    title: "Cardio-Respiratory Conditions",
    conditions: [
      {
        name: "COPD",
        image: "/treatment/cardio/copd.jpg",
        description:
          "Our pulmonary rehabilitation approach for COPD focuses on improving exercise capacity, managing symptoms, and enhancing quality of life.",
        treatments: [
          "Breathing techniques",
          "Exercise conditioning",
          "Energy conservation",
          "Airway clearance",
          "Self-management education",
        ],
      },
      {
        name: "Respiratory Muscle Weakness",
        image: "/treatment/cardio/resp.jpg",
        description:
          "Our specialized approach addresses respiratory muscle weakness through specific training techniques to improve breathing efficiency.",
        treatments: [
          "Inspiratory muscle training",
          "Breathing exercises",
          "Postural correction",
          "Activity pacing",
          "Energy conservation",
        ],
      },
      {
        name: "Bronchitis",
        image: "/treatment/cardio/bronc.jpg",
        description:
          "Our approach for bronchitis focuses on airway clearance, breathing efficiency, and maintaining physical activity levels.",
        treatments: [
          "Airway clearance techniques",
          "Breathing exercises",
          "Physical activity guidance",
          "Postural drainage",
          "Self-management strategies",
        ],
      },
      {
        name: "Bronchial Asthma",
        image: "/treatment/cardio/asthama.jpg",
        description:
          "Our specialized approach for asthma focuses on breathing techniques, exercise tolerance, and self-management strategies.",
        treatments: [
          "Breathing retraining",
          "Exercise prescription",
          "Trigger management",
          "Relaxation techniques",
          "Self-management education",
        ],
      },
      {
        name: "Post CABG",
        image: "/treatment/cardio/cabg.jpg",
        description:
          "Our cardiac rehabilitation approach after CABG surgery follows evidence-based protocols to ensure safe recovery and improved cardiovascular health.",
        treatments: [
          "Graduated exercise program",
          "Sternal precautions",
          "Risk factor management",
          "Functional activities",
          "Home exercise program",
        ],
      },
      {
        name: "Post Cardiac Surgery Recovery",
        image: "/treatment/cardio/card.jpg",
        description:
          "Our comprehensive cardiac rehabilitation program addresses physical recovery, risk factor modification, and return to activities after cardiac surgery.",
        treatments: [
          "Monitored exercise progression",
          "Education on risk factors",
          "Energy conservation",
          "Functional training",
          "Home exercise program",
        ],
      },
    ],
  },
];
