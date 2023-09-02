"use client";
import Breadcrumbs from "@/lib/components/Breadcrumbs";
import Card from "@/lib/components/Card";
import Form from "@/lib/components/Form";
import Input from "@/lib/components/Input";
import React from "react";
import {
  Calendar2Check,
  Check,
  ListTask,
  Search,
  X,
} from "react-bootstrap-icons";

const Page = () => {
  return (
    <main className="p-4 min-h-screen border space-y-3">
      <section className="space-y-3">
        <p className="font-bold text-2xl">All Schedule</p>
        <Form>
          <Form.Control className="relative w-full">
            <Input
              placeholder="Search"
              className="input-solid input-block pl-10"
            />
            <span className="absolute inset-y-0 left-4 inline-flex items-center text-gray-7">
              <Search />
            </span>
          </Form.Control>
        </Form>
      </section>
      <section className="space-y-3">
        <span className="pr-2 flex justify-between items-center text-sm w-full">
          <span>Current Schedule</span>
          <span>
            <ListTask className="w-6 h-6" />
          </span>
        </span>
        <Card className="max-w-full items-center justify-center hover:bg-slate-800 transition-colors">
          <Card.Body className="w-full">
            <div className="flex gap-3 justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <Calendar2Check className="w-6 h-6" />
                <div className="flex flex-col gap-1 items-start justify-end px-3 sm:hidden">
                  <span className="text-sm text-white font-bold">
                    Computer Programming 3
                  </span>
                  <span className="text-sm">A401</span>
                </div>
                <div className="hidden sm:block">
                  <Breadcrumbs>
                    <Breadcrumbs.Body>
                      <Breadcrumbs.Item>
                        <span className="text-white font-bold">
                          Computer Programming 3
                        </span>
                      </Breadcrumbs.Item>
                      <Breadcrumbs.Item>A401</Breadcrumbs.Item>
                    </Breadcrumbs.Body>
                  </Breadcrumbs>
                </div>
              </div>
              <span className="text-sm">12:30 / 3:30</span>
            </div>
          </Card.Body>
        </Card>
      </section>
      <section className="space-y-3">
        <div className="pr-2 flex justify-between items-center text-sm w-full">
          <span className="text-sm">Schedules</span>
          <span>
            <ListTask className="w-6 h-6" />
          </span>
        </div>
        <Card className="max-w-full items-center justify-center hover:bg-slate-800 transition-colors">
          <Card.Body className="w-full">
            <div className="flex gap-3 justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <Calendar2Check className="w-6 h-6" />
                <div className="flex flex-col gap-1 items-start justify-end px-3 sm:hidden">
                  <span className="text-sm text-white font-bold">
                    Computer Programming 3
                  </span>
                  <span className="text-sm">A401</span>
                </div>
                <div className="hidden sm:block">
                  <Breadcrumbs>
                    <Breadcrumbs.Body>
                      <Breadcrumbs.Item>
                        <span className="text-white font-bold">
                          Computer Programming 3
                        </span>
                      </Breadcrumbs.Item>
                      <Breadcrumbs.Item>A401</Breadcrumbs.Item>
                    </Breadcrumbs.Body>
                  </Breadcrumbs>
                </div>
              </div>
              <span className="text-sm">12:30 / 3:30</span>
            </div>
          </Card.Body>
        </Card>
        <Card className="max-w-full items-center justify-center hover:bg-slate-800 transition-colors">
          <Card.Body className="w-full">
            <div className="flex gap-3 justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <Calendar2Check className="w-6 h-6" />
                <div className="flex flex-col gap-1 items-start justify-end px-3 sm:hidden">
                  <span className="text-sm text-white font-bold">
                    Computer Programming 3
                  </span>
                  <span className="text-sm">A401</span>
                </div>
                <div className="hidden sm:block">
                  <Breadcrumbs>
                    <Breadcrumbs.Body>
                      <Breadcrumbs.Item>
                        <span className="text-white font-bold">
                          Computer Programming 3
                        </span>
                      </Breadcrumbs.Item>
                      <Breadcrumbs.Item>A401</Breadcrumbs.Item>
                    </Breadcrumbs.Body>
                  </Breadcrumbs>
                </div>
              </div>
              <span className="text-sm">12:30 / 3:30</span>
            </div>
          </Card.Body>
        </Card>
      </section>
      <section className="space-y-3">
        <span className="pr-2 flex justify-between items-center text-sm w-full">
          <span>Rooms</span>
          <span>
            <ListTask className="w-6 h-6" />
          </span>
        </span>
        <div className="space-y-3">
          <Card className="max-w-full items-center justify-center">
            <Card.Body className="w-full border border-green-800 text-green-600 hover:bg-green-500 hover:text-white rounded-xl transition-colors">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <span>
                    <Check className="w-6 h-6" />
                  </span>
                  <span>Room A401</span>
                </div>
                <span>Available</span>
              </div>
            </Card.Body>
          </Card>
          <Card className="max-w-full items-center justify-center">
            <Card.Body className="w-full border border-red-800 hover:bg-red-500 hover:text-white text-red-600 rounded-xl transition-colors">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <span>
                    <X className="w-6 h-6" />
                  </span>
                  <span>Room A402</span>
                </div>
                <span>Occupied</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Page;
