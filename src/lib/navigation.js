export const navigationTabs = [
  {
    id: 'design-engineering',
    label: 'Design & Engineering',
    sections: [
      {
        title: 'Water Supply and Hydraulics',
        links: [
          { title: 'Water Supply Sources', href: '/docs/water-supply' },
          { title: 'Hydraulic Calculations', href: '/docs/hydraulic-calculations' },
          { title: 'Fire Pumps', href: '/docs/pumps' },
          { title: 'Water Storage Tanks', href: '/docs/water-tanks' },
          { title: 'Underground Piping', href: '/docs/underground' },
        ],
      },
      {
        title: 'Hazard Classification and Layout',
        links: [
          { title: 'Occupancy and Hazard Classification', href: '/docs/occupancy-and-hazard' },
          { title: 'Design Area and Density', href: '/docs/design-area-and-density' },
          { title: 'Obstructions to Spray', href: '/docs/obstructions' },
          { title: 'Special Occupancies', href: '/docs/special-situations' },
          { title: 'Seismic Bracing', href: '/docs/seismic-bracing' },
        ],
      },
      {
        title: 'Design Phase',
        links: [
          { title: 'Design Workflow', href: '/docs/design' },
          { title: 'Coordination with Other Trades', href: '/docs/coordination' },
          { title: 'Plan Review and Approvals', href: '/docs/plan-review' },
        ],
      },
    ],
  },
  {
    id: 'field-operations',
    label: 'Field Operations',
    sections: [
      {
        title: 'Fabrication and Installation',
        links: [
          { title: 'Shop Drawings and Fabrication', href: '/docs/fabrication' },
          { title: 'Field Installation', href: '/docs/installation' },
          { title: 'Listing and Approvals', href: '/docs/listing-and-approvals' },
        ],
      },
      {
        title: 'Inspection and Maintenance',
        links: [
          {
            title: 'Inspection, Testing, and Maintenance',
            href: '/docs/itm',
          },
        ],
      },
    ],
  },
  {
    id: 'project-management',
    label: 'Project Management',
    sections: [
      {
        title: 'Project Management',
        links: [
          { title: 'Interdepartmental SOPs', href: '/docs/interdepartmental' },
          { title: 'Estimation and Bidding', href: '/docs/estimation' },
        ],
      },
      {
        title: 'Industry Perspectives',
        links: [
          { title: 'Industry Perspectives', href: '/docs/perspectives' },
        ],
      },
    ],
  },
  {
    id: 'professional-development',
    label: 'Professional Development',
    sections: [
      {
        title: 'NICET Certification',
        links: [
          { title: 'NICET Overview', href: '/docs/nicet-overview' },
          { title: 'Level I Study Guide', href: '/docs/nicet-level-1' },
          { title: 'Level II Study Guide', href: '/docs/nicet-level-2' },
          { title: 'Level III Study Guide', href: '/docs/nicet-level-3' },
          { title: 'Level IV Study Guide', href: '/docs/nicet-level-4' },
        ],
      },
      {
        title: 'History',
        links: [
          { title: 'History of Fire Protection', href: '/docs/history' },
        ],
      },
      {
        title: 'Contributing',
        links: [
          { title: 'How to Contribute', href: '/docs/how-to-contribute' },
        ],
      },
    ],
  },
  {
    id: 'fundamentals',
    label: 'Fundamentals',
    sections: [
      {
        title: 'Getting Started',
        links: [
          { title: 'Overview', href: '/' },
          { title: 'Codes and Standards', href: '/docs/codes-and-standards' },
        ],
      },
      {
        title: 'Fire Science',
        links: [
          { title: 'Fire Dynamics', href: '/docs/fire-dynamics' },
          { title: 'Suppression Principles', href: '/docs/suppression-and-prevention' },
        ],
      },
      {
        title: 'System Types',
        links: [
          { title: 'Wet Pipe Systems', href: '/docs/wet-pipe-systems' },
          { title: 'Dry Pipe Systems', href: '/docs/dry-pipe-systems' },
          { title: 'Preaction and Deluge', href: '/docs/preaction-and-deluge' },
          { title: 'Standpipes', href: '/docs/standpipes' },
        ],
      },
      {
        title: 'Components and Materials',
        links: [
          { title: 'Sprinkler Heads', href: '/docs/sprinkler-heads' },
          { title: 'Pipe and Fittings', href: '/docs/pipe-and-fittings' },
          { title: 'Hangers, Bracing, and Restraints', href: '/docs/hangers-bracing-restraints' },
          { title: 'Valves and Trim', href: '/docs/valves-and-trim' },
        ],
      },
    ],
  },
]

// Flat export for search indexing, prev/next links, and DocsHeader section lookup
export const navigation = navigationTabs.flatMap((tab) => tab.sections)
