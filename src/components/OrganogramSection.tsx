// src/components/OrganogramSection.tsx
import React from "react";

type OrgNode = {
  title: string;
  name?: string;
  department?: string;
  children?: OrgNode[];
};

// Edit this tree to update the organogram. It shows positions only;
// add a `name` to a node to show the person holding that role.
const organogram: OrgNode = {
  title: "Founder & CEO",
  department: "Leadership",
  children: [
    {
      title: "Head of Operations",
      department: "Operations",
      children: [
        {
          title: "Waste Collectors and Loaders",
          department: "Operations"
        }
      ]
    },
    {
      title: "Accountant",
      department: "Finance"
    },
    {
      title: "Chief Technology Officer",
      department: "Technology",
      children: [
        {
          title: "Senior UI/UX Designer & Developer",
          department: "Design & Development"
        },
        {
          title: "Designer",
          department: "Design & Development"
        }
      ]
    }
  ]
};

const OrgCard: React.FC<{ node: OrgNode; isRoot?: boolean }> = ({
  node,
  isRoot
}) => (
  <div
    className={`org-card rounded-[2px] px-4 py-4 text-left lg:text-center ${
      isRoot
        ? "bg-ink text-white shadow-[0_20px_40px_-24px_rgba(12,36,39,0.8)]"
        : "bg-white text-ink ring-1 ring-ink/15"
    }`}
  >
    {node.department && (
      <div className={`label !text-[0.65rem] ${isRoot ? "text-leaf" : "text-petrol"}`}>
        {node.department}
      </div>
    )}
    <div className="mt-1.5 font-bold leading-snug">{node.title}</div>
    {node.name && (
      <div className={`mt-1 text-sm ${isRoot ? "text-white/70" : "text-muted-foreground"}`}>
        {node.name}
      </div>
    )}
  </div>
);

const OrgBranch: React.FC<{ node: OrgNode; isRoot?: boolean }> = ({
  node,
  isRoot
}) => (
  <li>
    <OrgCard node={node} isRoot={isRoot} />
    {node.children && node.children.length > 0 && (
      <ul>
        {node.children.map((child) => (
          <OrgBranch key={child.title} node={child} />
        ))}
      </ul>
    )}
  </li>
);

const OrganogramSection: React.FC = () => {
  return (
    <section id="organogram" className="bg-background py-24 md:py-32">
      <div className="wrap">
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
          <h2 className="display display-lg rv lg:col-span-7">
            Our <span className="hl">Organogram</span>
          </h2>
          <p
            className="lede rv text-muted-foreground lg:col-span-5"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            How Blancosy is organized to deliver on its mission
          </p>
        </div>
        <div className="org-tree rv overflow-x-auto pb-2">
          <ul aria-label="Blancosy organization structure">
            <OrgBranch node={organogram} isRoot />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganogramSection;
